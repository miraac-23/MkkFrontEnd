import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
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
                        navigate('/');
                    })
                }}
            >

                <Form className="ui form">
                    <MkkTextInput name="name" placeholder="Departman Adı" />

                    <Button color="green" type="submit" id='submitButton' >Ekle</Button>

                </Form>

            </Formik>

        </div>
    )
}
