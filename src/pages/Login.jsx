import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card } from 'semantic-ui-react';
import authService from '../services/authService';
import MkkTextInput from '../utilities/customFormControls/MkkTextInput';


export default function Login() {

    
    const navigate = useNavigate();

    const initialValues = { 
        username: "", 
        password:""
    }

    const schema = Yup.object({
        username: Yup.string().required("Kullanıcı Adı zorunlu"),
        password: Yup.string().required("Şifre Zorunlu")      
    })

    return (
        <div>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Formik
                     initialValues={initialValues}
                     validationSchema={schema}
                     onSubmit={(values) => {
                         authService.login(values.username,values.password).then(result => {
                             console.log(result);
                             navigate('/employeeList');
                         })
                     }}
                     validator={() => ({
                        
                     })}

                    >
                        <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                            <Divider horizontal style={{ marginBottom: '2em' }}>Giriş Ekranı</Divider>

                            <label>Email</label>
                            <MkkTextInput name="username" placeholder="example@company.com" />

                            <label>Şifre</label>
                            <MkkTextInput name="password" placeholder="*********" />


                            <Button color='linkedin' type='submit' fluid>Giriş Yap</Button>

                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </div>
    )
}
