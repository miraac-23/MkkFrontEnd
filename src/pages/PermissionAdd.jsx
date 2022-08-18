import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button, Divider, Dropdown, Select, Grid, Segment, Table } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import PermissionService from '../services/permissionService';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import PermissionTypeService from '../services/permissionTypeService';
import EmployeeService from '../services/employeeService';


const permissionTypeService = new PermissionTypeService();
const employeeService = new EmployeeService();


export default function PermissionAdd() {

    let { id } = useParams();
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    const [permissionTypeId, setPermissionTypeId] = useState();
    const [permissionTypes, setPermissionTypes] = useState([]);
    const permissionService = new PermissionService();
    
    const initialValues = {
        employeeId: id,
        endDate: "",
        permissionDay: "",
        // permissionTypeId: "",
        startingDate: "",
        statement: "",

    }


    useEffect(() => {
        employeeService.getEmployeeById(id).then(result => setEmployee(result.data.data));
        employeeService.getEmployees().then(result => setEmployees(result.data.data));
        permissionTypeService.getPermissionTypes().then(result => setPermissionTypes(result.data.data));


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
        // permissionTypeId: Yup.number().required("İzin türü id girilmesi zorunlu"),
        startingDate: Yup.date().required("İzin başlangıç tarihi girilmesi zorunlu"),

    })



    const res = employees.find((employee) => employee.id === 55);


    return (
        <Grid>
            <Grid.Row>


                <Grid.Column width={5}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Personel Adı</Table.HeaderCell>
                                <Table.HeaderCell>Personel Soyadı</Table.HeaderCell>

                            </Table.Row>
                        </Table.Header>

                        <Table.Body>



                            <Table.Row>
                                <Table.Cell>{employee.name}</Table.Cell>
                                <Table.Cell>{employee.surname}</Table.Cell>
                            </Table.Row>


                        </Table.Body>


                    </Table>

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
                            <MkkTextInput name="startingDate" placeholder="İzin Başlangıç Tarihi" />
                            <label>İzin Bitiş Tarihi</label>
                            <MkkTextInput name="endDate" placeholder="İzin Bitiş Tarihi" />

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







