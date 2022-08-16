import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button, Divider } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import PermissionTypeService from '../services/permissionTypeService';

const permissionTypeService = new PermissionTypeService();

export default function PermissionTypeAdd() {
    const navigate = useNavigate();

    const initialValues = { name: "" }

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    permissionTypeService.addPermissionType(values).then(result => {
                        console.log(result);
                        navigate('/permissionTypeList');
                    })
                }}
            >


                <Form className="ui form" style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                    <Divider horizontal style={{ marginBottom: '2em' }}>İzin Türü Ekle</Divider>

                    <MkkTextInput name="name" placeholder="İzin Türü " />

                    <Button color="blue" type="submit" id='submitButton' fluid >Ekle</Button>

                </Form>

            </Formik>        </div>
    )
}
