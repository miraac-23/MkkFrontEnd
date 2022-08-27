import React, { useState, useEffect, useRef } from 'react';
import EmployeeService from '../services/employeeService';
import { Formik, Form } from 'formik';
import { Icon, Menu, Table, Button, Grid, Divider, Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import PermissionTypeService from '../services/permissionTypeService';
import PermissionService from '../services/permissionService';
import * as Yup from "yup";
import { useParams } from 'react-router';


const permissionTypeService = new PermissionTypeService();
const employeeService = new EmployeeService();
const permissionService = new PermissionService();


export default function EmployeeList() {


    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({})
    const employeeService = new EmployeeService();
    const [status, setStatus] = useState("");
    const [permissionTypeId, setPermissionTypeId] = useState('');
    const [employeeId, setEmployeeId] = useState();
    const [permissionTypes, setPermissionTypes] = useState([]);
    const [error, setError] = useState("");
    const [tcValue, setTcValue] = useState();

    const [employeeDate, setEmployeeDate] = useState();

    const [IzinHakkı, setIzinHakkı] = useState();

    const [abc, setAbc] = useState({});


    const [state, setState] = useState('');






    const initialValues = {
        endDate: "",
        permissionDay: "",
        startingDate: "",
        statement: "",
    }

    const schema = Yup.object({
        endDate: Yup.date().required("İzin bitiş tarihi girilmesi zorunlu"),
        permissionDay: Yup.number().required("İzin günü girilmesi zorunlu"),
        startingDate: Yup.date().required("İzin başlangıç tarihi girilmesi zorunlu"),

    })


    useEffect(() => {

        employeeService.getEmployees().then(result => setEmployees(result.data.data)).catch(error => setError(error));
        permissionTypeService.getPermissionTypes().then(result => setPermissionTypes(result.data.data));


    }, [])




    const handleChangePermissionTypeId = (e) => {

        setPermissionTypeId(e.target.value);

    };


    function handle() {

        try {
            const found = employees.find((employee) => employee.tcNo == state)
            setEmployee(found)

            let newDate = new Date()
            let date = newDate.getUTCFullYear();

            let findDate = date - found.startDateOfWork.substring(0, 4);
            setEmployeeDate(findDate)
            setEmployeeId(found.id)

            let hakEdilenIzin = 0;

            if (findDate > 1 && findDate < 5) {

                hakEdilenIzin = (findDate) * 14;
            } else if (findDate < 1) {

                hakEdilenIzin = (findDate) * 0;

            } else if (findDate > 5 && findDate < 15) {

                hakEdilenIzin = (findDate) * 20;
            }

            setIzinHakkı(hakEdilenIzin);


            employeeService.getEmployeeById(found.id).then(result => setAbc(result.data.data));


        } catch (e) {
            alert('Girmiş olduğunuz Tc kimlik numarasına ait personel bulunamadı, geçerli bir kimlik numarası giriniz !...')
            window.location.reload();
        }


    }

    console.log(abc)


    const handleChange = (event) => {
        setState(event.target.value);
    }


    const handlehandleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    function handleRefresh() {
        window.location.reload();
    }


    return (
        <div>

            <Grid>
                <Divider horizontal style={{ textSize: '1000px', marginBottom: '2em', marginLeft: '15em', fontSize: '30px', fontWeight: 'bold' }}>PERSONEL İZİN EKLEME</Divider>

                <Grid.Row>
                    <Grid.Column width={5}>

                        <form
                            onSubmit={handleSubmit}>
                            <label style={{ fontSize: '23px', fontWeight: 'bold', marginTop: '1em' }}>Tc Kimlik Numaranızı Giriniz</label> <br />


                            <input style={{ border: '3px solid black', borderRadius: '5px', width: '85%', height: '2.5em', marginBottom: '1em', marginTop: '1em' }} type="text" onChange={handleChange} /><br />

                            <Button color='green' onClick={handle} >Ara</Button>
                            <Button style={{ marginBottom: '3em' }} color='green' onClick={handleRefresh} >Yenile</Button><br />



                            <Card style={{ marginLeft: '1.5em' }}>
                                <Card.Content>
                                    <Card.Header style={{ fontSize: '30px', fontWeight: 'bold', }}>Personel</Card.Header>
                                    <Card.Meta>
                                        
                                        <span style={{ fontWeight: 'bold', }} className='date'>Adı: {employee.name}</span><br />
                                        <span style={{ fontWeight: 'bold', }} className='date'>Soyadı: {employee.surname}</span><br />
                                        <span style={{ fontWeight: 'bold', }} className='date'>Departman: {employee.departmentName}</span><br />
                                        <span style={{ fontWeight: 'bold', }} className='date'>Pozisyon: {employee.positionName}</span><br />
                                        <span style={{ fontWeight: 'bold', }} className='date'>Telefon No: {employee.phoneNumber}</span><br />

                                    </Card.Meta>

                                </Card.Content>

                                <Card.Content extra>

                                    Hak edilen izin :{IzinHakkı} <br />
                                    Kalan izin :                <br />


                                </Card.Content>


                                <Card.Content extra>
                                    <Link to="/home">

                                        <Icon name='home' />
                                        Ana Sayfa

                                    </Link>
                                </Card.Content>
                            </Card>

                        </form>




                    </Grid.Column>
                    <Grid.Column width={11}>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {

                                const data = { ...values, permissionTypeId, employeeId }
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
                                <MkkTextInput name="startingDate" placeholder="İzin Başlangıç Tarihi" />
                                <label>İzin Bitiş Tarihi</label>
                                <MkkTextInput name="endDate" placeholder="İzin Bitiş Tarihi" />



                                <label>Persone Id</label>
                                <input type="text" name="employeeId" placeholder="Personel Id'si" defaultValue={employeeId} disabled />




                                <label>İzin Günü</label>
                                <MkkTextInput name="permissionDay" placeholder="İzin Günü" />
                                <label>Açıklama</label>
                                <MkkTextInput name="statement" placeholder="Açıklama" />


                                <Button color="blue" type="submit" fluid >Ekle</Button>

                            </Form>

                        </Formik >


                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
