import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import PositionService from '../services/positionService';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function PositionAdd() {


    const positionService = new PositionService();
    const initialValues = { name: "" }
    const navigate = useNavigate();

    const schema = Yup.object({
        name: Yup.string().required("Pozisyon Adı zorunlu"),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    positionService.addPosition(values).then(result => {
                        console.log(result);
                        navigate('/position/add');
                    })
                }}
            >

                <Form className="ui form">
                    <MkkTextInput name="name" placeholder="Pozisyon Adı" />

                    <Button color="green" type="submit" id='submitButton' >Ekle</Button>

                </Form>

            </Formik>

        </div>
    )
}
