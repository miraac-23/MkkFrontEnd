import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card } from 'semantic-ui-react';

export default function deneme() {

    //Static for now, will come from session

    return (
        <Grid.Row>
            <Grid.Column width={12}>
                <Formik
                    >

                    <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                        <Divider horizontal style={{ marginBottom: '2em' }}>Personel Bilgilerini Düzenle</Divider>
                        <SemanticForm.Field>
                            <label>Personel Adı</label>
                            <Field name='name' type='text' placeholder='Example Firm' />
                            <ErrorMessage name="name" render={msg => <Message error header='Hata' content={msg} />} />
                        </SemanticForm.Field>
                        <SemanticForm.Field>
                            <label>Sirket Maili</label>
                            <Field name='mail' placeholder='example@company.com' />
                            <ErrorMessage name="mail" render={msg => <Message error header='Hata' content={msg} />} />
                        </SemanticForm.Field>
                        <SemanticForm.Field>
                            <label>Sifre</label>
                            <Field name='password' placeholder='**********' />
                            <ErrorMessage name="password" render={msg => <Message error header='Hata' content={msg} />} />
                        </SemanticForm.Field>
                        <SemanticForm.Field>
                            <label>Telefon Numarasi</label>
                            <Field name='phone' type='tel' placeholder='444 85 14' />
                            <ErrorMessage name="phone" render={msg => <Message error header='Hata' content={msg} />} />
                        </SemanticForm.Field>
                       
                            <Card fluid style={{ marginTop: '2em', backgroundColor: '#d4edda', boxShadow: 'rgba(0, 0, 0, 0.15) 2.95px 2.95px 4.5px' }}>
                                <Card.Content>
                                    <Card.Header>Onay bekliyor</Card.Header>
                                    <Card.Meta>Degisiklik tarihi ve saati:  |</Card.Meta>
                                </Card.Content>
                            </Card>
                         
                            <Button color='linkedin' type='submit' fluid>Kaydet</Button>
                        
                    </Form>
                </Formik>
            </Grid.Column>
        </Grid.Row>



    )
}
