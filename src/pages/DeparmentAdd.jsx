import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button, Divider } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import DepartmentService from '../services/departmentService';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function DeparmentAdd() {


    const departmentService = new DepartmentService();
    const initialValues = { name: "" }
    const navigate = useNavigate();

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    departmentService.addDepartment(values).then(result => {
                        console.log(result);
                        navigate('/departmentList');
                    })
                }}
            >


                <Form className="ui form" style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                    <Divider horizontal style={{ marginBottom: '2em' }}>Departman Ekle</Divider>

                    <MkkTextInput name="name" placeholder="Departman Adı" />

                    <Button color="blue" type="submit" id='submitButton' fluid >Ekle</Button>

                </Form>

            </Formik>

        </div>
    )
}
