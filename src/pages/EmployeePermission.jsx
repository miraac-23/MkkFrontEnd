import React, { useState, useEffect } from 'react';
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




const permissionTypeService = new PermissionTypeService();
const employeeService = new EmployeeService();
const permissionService = new PermissionService();


export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState(null, {})
    const employeeService = new EmployeeService();
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const [permissionTypeId, setPermissionTypeId] = useState();
    const [permissionTypes, setPermissionTypes] = useState([]);
    const [tcNo , setTcNo] = useState();


    const initialValues = {
        employeeId: "",
        endDate: "",
        permissionDay: "",
        // permissionTypeId: "",
        startingDate: "",
        statement: "",

    }

    const found = employees.find(obj => {
        return obj.tcNo === 9874;
    })


    console.log(found);

    useEffect(() => {

        employeeService.getEmployees().then(result => setEmployees(result.data.data))

    }, [])

    useEffect(() => {
        permissionTypeService.getPermissionTypes().then(result => setPermissionTypes(result.data.data));


    }, [])


    const handleChangePermissionTypeId = (e) => {

        setPermissionTypeId(e.target.value);

        console.log(e.target.value)

    };




    const schema = Yup.object({
        employeeId: Yup.number().required("Personel Id girilmesi zorunlu"),
        endDate: Yup.date().required("İzin bitiş tarihi girilmesi zorunlu"),
        permissionDay: Yup.number().required("İzin günü girilmesi zorunlu"),
        // permissionTypeId: Yup.number().required("İzin türü id girilmesi zorunlu"),
        startingDate: Yup.date().required("İzin başlangıç tarihi girilmesi zorunlu"),

    })




    function handleDelete(id) {

        if (window.confirm("Are you sure delete?")) {
            employeeService.deleteEmployee(id)
                .then(() => setStatus('Delete successful'));
        }
    }

    function handleUpdate(id) {
        navigate('/employeeUpdate' + id)

    }

    function handlePermission(id) {
        navigate('/permissionAdd' + id)

    }



    return (
        <div>


            <Grid>
                <Divider horizontal style={{ textSize: '1000px', marginBottom: '2em', marginLeft: '15em', fontSize: '30px', fontWeight: 'bold' }}>PERSONEL LİSTESİ</Divider>

                <Grid.Row>
                    <Grid.Column width={5}>


                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    <input />
                                </Card.Header><br/>
                                <Card.Meta>
                                    <Button>Onayla</Button>
                                </Card.Meta>
                                <Card.Description>
                                </Card.Description>
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
                                <MkkTextInput name="startingDate" placeholder="İzin Başlangıç Tarihi" />
                                <label>İzin Bitiş Tarihi</label>
                                <MkkTextInput name="endDate" placeholder="İzin Bitiş Tarihi" />

                                <label>Persone Id</label>
                                <MkkTextInput name="employeeId" placeholder="Personel Id"  />
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
