import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button, Divider, Dropdown, Select, Grid, Segment, Table, Card, Icon, } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import PermissionService from '../services/permissionService';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import PermissionTypeService from '../services/permissionTypeService';
import EmployeeService from '../services/employeeService';
import { NavLink } from "react-router-dom";



const permissionTypeService = new PermissionTypeService();
const employeeService = new EmployeeService();
const permissionService = new PermissionService();



export default function PermissionAdd() {

    let { id } = useParams();
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    const [permissionTypeId, setPermissionTypeId] = useState();
    const [permissionTypes, setPermissionTypes] = useState([]);


    const [employeePermissionSum, setEmployeePermissionSum] = useState([]);
    const [abc, setAbc] = useState({});
    const [message, setMessage] = useState("");
    const [remainingPermission, setRemainingPermission] = useState();
    const [IzinHakkı, setIzinHakkı] = useState();
    const [state, setState] = useState('');
    const [employeeId, setEmployeeId] = useState('');


    const initialValues = {
        employeeId: id,
        endDate: "",
        permissionDay: "",
        startingDate: "",
        statement: "",

    }


    useEffect(() => {
        employeeService.getEmployeeById(id).then(result => setEmployee(result.data.data));
        employeeService.getEmployees().then(result => setEmployees(result.data.data));
        permissionTypeService.getPermissionTypes().then(result => setPermissionTypes(result.data.data));
        permissionService.getPermissionDaySum().then(result => setEmployeePermissionSum(result.data.data));



    }, [])


    const handleChangePermissionTypeId = (e) => {

        setPermissionTypeId(e.target.value);

        console.log(e.target.value)

    };



    const navigate = useNavigate();
    const schema = Yup.object({
        employeeId: Yup.number().required("Personel Id girilmesi zorunlu"),
        endDate: Yup.date().required("İzin bitiş tarihi girilmesi zorunlu"),
        permissionDay: Yup.number().required("İzin günü girilmesi zorunlu"),
        startingDate: Yup.date().required("İzin başlangıç tarihi girilmesi zorunlu"),

    })

    function handle() {

        try {

            let resultPermissions = 0;

            let newDate = new Date()

            let currentYear = newDate.getUTCFullYear();
            let currentMounth = (newDate.getUTCMonth() + 1).toString();
            let currentDay = newDate.getDate();

            let employeeYear = employee.startDateOfWork.substring(0, 4);
            let employeeMounth = (employee.startDateOfWork.substring(5, 7));
            let employeeDay = employee.startDateOfWork.substring(8, 10);

            let resultYear = (currentYear - employeeYear);
            let resultMounth = Math.abs((currentMounth - employeeMounth));
            let resultDay = Math.abs((currentDay - employeeDay));



            if (resultYear == 0) {
                setIzinHakkı(0)
            } else {
                let hakEdilenIzin = 0;
                if (currentMounth <= employeeMounth) {

                    for (let i = 1; i <= resultYear; i++) {

                        if (i <= 5) {
                            hakEdilenIzin += 14;
                        }
                        if (i > 5 && i <= 15) {
                            hakEdilenIzin += 20;
                        }
                        if (i > 15) {
                            hakEdilenIzin += 26;
                        }
                    }
                    setIzinHakkı(hakEdilenIzin);

                }
                else {
                    for (let i = 1; i <= resultYear; i++) {

                        if (i <= 5) {
                            hakEdilenIzin += 14;
                        }
                        if (i > 5 && i <= 15) {
                            hakEdilenIzin += 20;
                        }
                        if (i > 15) {
                            hakEdilenIzin += 26;
                        }
                    }
                    setIzinHakkı(hakEdilenIzin);
                }
            }

            try {
                const foundPermission = employeePermissionSum.find((permissionSum) => permissionSum.employeeId == id)

                setRemainingPermission(foundPermission.employeePermissionDaySum);

            } catch (e) {

                setMessage(0)

            }


            employeeService.getEmployeeById(id).then(result => setAbc(result.data.data));


        } catch (e) {
            alert('Girmiş olduğunuz Tc kimlik numarasına ait personel bulunamadı, geçerli bir kimlik numarası giriniz !...')
            window.location.reload();
        }

    }



    const res = employees.find((employee) => employee.id === 55);


    return (
        <Grid>
            <Grid.Row>


                <Grid.Column width={5}>
                 

                    <Card style={{ marginLeft: '1.5em' }}>
                        <Card.Content>
                            <Card.Header style={{ fontSize: '30px', fontWeight: 'bold', }}>Personel</Card.Header>
                            <Card.Meta>

                                <span style={{ fontWeight: 'bold', }} className='date'>Adı: {employee.name}</span><br />
                                <span style={{ fontWeight: 'bold', }} className='date'>Soyadı: {employee.surname}</span><br />


                            </Card.Meta>

                        </Card.Content>

                        <Card.Content extra>

                            Hak edilen izin :{IzinHakkı} <br />
                            Kullanılan izin :{remainingPermission} {message}<br />
                            Kalan izin : {(IzinHakkı) - (remainingPermission)}  {message}  <br />

                        </Card.Content>


                        <Card.Content extra>
                        <Button color='green' onClick={handle} fluid>Hesapla</Button>
                        </Card.Content>
                    </Card>

                </Grid.Column>


                <Grid.Column width={11}>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {

                            const data = { ...values, permissionTypeId }
                            permissionService.addPermission(data).then(result => {
                                console.log(result);
                                navigate('/permissionList');
                            })
                        }}
                    >

                        <Form className="ui form" style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                            <Divider horizontal style={{ marginBottom: '2em' }}>İzin Ekle</Divider>


                            <label>İzin Türü
                                <select name="permissionTypeId" onChange={handleChangePermissionTypeId}  >
                                    {permissionTypes.map(permissionType => (
                                        <option key={permissionType.id} value={permissionType.id}  >
                                            {permissionType.name}
                                        </option>
                                    ))}
                                </select><br></br>
                            </label>

                            <label>İzin Başlangıç Tarihi</label>
                            <MkkTextInput name="startingDate" placeholder="İzin Başlangıç Tarihi (YYYY-AA-GG)" />
                            <label>İzin Bitiş Tarihi</label>
                            <MkkTextInput name="endDate" placeholder="İzin Bitiş Tarihi (YYYY-AA-GG)" />

                            <label>Persone Id</label>
                            <MkkTextInput name="employeeId" placeholder="Personel Id" disabled />
                            <label>İzin Günü</label>
                            <MkkTextInput name="permissionDay" placeholder="İzin Günü" />
                            <label>Açıklama</label>
                            <MkkTextInput name="statement" placeholder="Açıklama" />


                            <Button color="blue" type="submit" fluid >Ekle</Button>

                        </Form>


                    </Formik >


                </Grid.Column>
            </Grid.Row>
        </Grid >



    )
}
<div role="combobox" aria-expanded="false" class="ui search selection upward dropdown"><input type="text" aria-autocomplete="list" autoComplete="off" class="search" tabindex="0" value="" /><div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Choose an option</div><i aria-hidden="true" class="dropdown icon"></i><div role="listbox" class="menu transition"><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item"><span class="text">One</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Two</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">Three</span></div></div></div>







