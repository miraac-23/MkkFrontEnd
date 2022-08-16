import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Input } from 'semantic-ui-react';
import EmployeeService from '../services/employeeService';
import MkkTextInput from '../utilities/customFormControls/MkkTextInput';
import { useParams } from 'react-router';




export default function EmployeeUpdate() {

    let { id } = useParams();
    const [employee, setEmployee] = useState({});
    const employeeService = new EmployeeService();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");

    const initialValues = {
        email: "",
        password: "",
        phoneNumber: "",
        surname: "",
        employeeId: id,
    }




    const schema = Yup.object({
        email: Yup.string().required("Personel maili girilmesi zorunlu"),
        password: Yup.string().required("Şifre Zorunlu"),
        phoneNumber: Yup.number().required("Telefon Numarası zorunlu"),
        surname: Yup.string().required("Personel soyadı girilmesi zorunlu"),
        //employeeId: Yup.number().required("Id zorunlu")

    })

    useEffect(() => {
        employeeService.getEmployeeById(id).then(result => setEmployee(result.data.data))
    }, [])



    function handleEmployeeUpdate(values) {
        employeeService.updateEmployee(values).then(() => setStatus('Güncelleme Başarılı'));
    }


    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column >

                    </Grid.Column>
                    <Grid.Column width={14}>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                employeeService.updateEmployee(values).then(result =>{
                                    console.log(values);
                                    navigate('/employeeList')

                                })
                                //navigate('/employeeList')
                            }}

                        >

                            <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                                <Divider horizontal style={{ marginBottom: '2em' }}>Personel BİLGİLERİNİ DÜZENLE</Divider>

                                <label>Email</label>
                                <MkkTextInput name="email" placeholder={employee.email}  ></MkkTextInput>

                                <label>Şifre</label>
                                <MkkTextInput name="password" placeholder={employee.password}  ></MkkTextInput>

                                <label>Telefon Numarası</label>
                                <MkkTextInput name="phoneNumber" placeholder={employee.phoneNumber} ></MkkTextInput>

                                <label>Personel Soyadı</label>
                                <MkkTextInput name="surname" placeholder={employee.surname}></MkkTextInput>

                                <label>Personel Id</label>
                                <MkkTextInput name="employeeId" disabled  ></MkkTextInput>

                                <Button color='green' type='submit' fluid>Güncelle</Button>

                            </Form>


                        </Formik>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
