import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Grid, Button, Divider, Form as SemanticForm, Message, Card } from 'semantic-ui-react';
import MkkTextInput from '../utilities/customFormControls/MkkTextInput';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/employeeService';



export default function EmployeeAdd() {

    const employeeService = new EmployeeService();
    const navigate = useNavigate();


    const initialValues = {
        name: "",
        tcNo: 123,
        surname: "",
        startDateOfWork: "",
        leaveDateOfWork: "",
        birthday: "",
        phoneNumber: "",
        email: "",
        password: "",
        userType: "",
        positionId: "",
        departmentId: "",


    }

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
        tcNo: Yup.number().required("Personel Tc zorunlu"),
        surname: Yup.string().required("Personel Soy Adı zorunlu"),
        startDateOfWork: Yup.date().required("İşe Başlama Tarihi Zorunlu"),
        leaveDateOfWork: Yup.date().required("İşten Ayrılma Tarihi Zorunlu"),
        birthday: Yup.date().required("Doğum Günü"),
        phoneNumber: Yup.number().required("Telefon Numarası"),
        password: Yup.string().required("Şifre Zorunlu "),
        userType: Yup.string().required("Kullanıcı Tipi"),
        positionId: Yup.number().required("Pozisyon Id Zorunlu"),
        departmentId: Yup.number().required("Departman Id Zorunlu"),

    })
    return (
        <div>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            employeeService.addEmployee(values).then(result => {
                                console.log(result);
                                navigate('/employeeList');
                            })
                        }}
                        validator={() => ({

                        })}
                    >

                        <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                            <Divider horizontal style={{ marginBottom: '2em' }}>Personel Ekle</Divider>
                            <label>Tc No</label>
                            <MkkTextInput name="tcNo" placeholder="Tc No" />
                            <label>Personel Adı</label>
                            <MkkTextInput name="name" placeholder="Personel Adı" />
                            <label>Personel Soyadı</label>
                            <MkkTextInput name="surname" placeholder="Personel Soyadı" />
                            <label>Personelin İşe Başlama Tarihi</label>
                            <MkkTextInput name="startDateOfWork" placeholder="İşe Başlama Tarihi" />
                            <label>Personelin İşten Ayrılma Tarihi</label>
                            <MkkTextInput name="leaveDateOfWork" placeholder="İşten Ayrılma Tarihi" />
                            <label>Doğum Günü</label>
                            <MkkTextInput name="birthday" placeholder="Doğum Günü" />
                            <label>Telefon Numarası</label>
                            <MkkTextInput name="phoneNumber" placeholder="Telefon Numarası" />
                            <label>Email</label>
                            <MkkTextInput name="email" placeholder="Email" />
                            <label>Şifre</label>
                            <MkkTextInput name="password" placeholder="Şifre" />
                            <label>Kullanıcı Tipi</label>
                            <MkkTextInput name="userType" placeholder="Kullanıcı Tipi" />
                            <label>Pozisyon</label>
                            <MkkTextInput name="positionId" placeholder="Pozisyon Id si" />
                            <label>Departman</label>
                            <MkkTextInput name="departmentId" placeholder="Departman Id si" />

                            <Button color="twitter" type="submit" fluid>Ekle</Button>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}

/*       

                <Form className="ui form"  style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                    <MkkTextInput name="name" placeholder="Departman Adı" />

                    <Button color="blue" type="submit" id='submitButton' fluid >Ekle</Button>

                </Form>

            </Formik>*/
