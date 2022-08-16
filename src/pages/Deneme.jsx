import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card } from 'semantic-ui-react';

export default function deneme() {

    //Static for now, will come from session

    const initialValues = {
        name: "",
        surname:"",


    }

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
        surname: Yup.string().required("Personel SoyAdı zorunlu"),

     

    })

    return (
        <Grid.Row>
            <Grid.Column width={12}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                      console.log(values)
                    }}
                    validator={() => ({

                    })}
                >

                    <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                        <Divider horizontal style={{ marginBottom: '2em' }}>Personel Bilgilerini Düzenle</Divider>

                   




                        <Button color='linkedin' type='submit' fluid>Kaydet</Button>

                    </Form>
                </Formik>
            </Grid.Column>
        </Grid.Row>



    )
}
