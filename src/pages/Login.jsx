import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card } from 'semantic-ui-react';
import EmployeeService from '../services/employeeService';
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'

export default function Login() {
    return (
        <div>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Formik
                    >
                        <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                            <Divider horizontal style={{ marginBottom: '2em' }}>Giriş Ekranı</Divider>

                            <label>Email</label>
                            <MkkTextInput name="mail" placeholder="example@company.com" />

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
