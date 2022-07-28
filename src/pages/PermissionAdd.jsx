import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Button, Divider } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'
import PermissionService from '../services/permissionService';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function PermissionAdd() {


    const permissionService = new PermissionService();
    const initialValues = { 
        employeeId:"",
        endDate: "",
        permissionDay: "",
        permissionTypeId: "",
        startingDate: "",
        statement: "",
    }

    const navigate = useNavigate();
    const schema = Yup.object({
        employeeId: Yup.number().required("Personel Id girilmesi zorunlu"),
        endDate: Yup.date().required("İzin bitiş tarihi girilmesi zorunlu"),
        permissionDay: Yup.number().required("İzin günü girilmesi zorunlu"),
        permissionTypeId: Yup.number().required("İzin türü id girilmesi zorunlu"),
        startingDate: Yup.date().required("İzin başlangıç tarihi girilmesi zorunlu"),

    })

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
            permissionService.addPermission(values).then(result => {
                console.log(result);
                navigate('/');
            })
        }}
    >

        <Form className="ui form" style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
            <Divider horizontal style={{ marginBottom: '2em' }}>İzin Ekle</Divider>

            <label>İzin Başlangıç Tarihi</label>
            <MkkTextInput name="startingDate" placeholder="İzin Başlangıç Tarihi" />
            <label>İzin Bitiş Tarihi</label>
            <MkkTextInput name="endDate" placeholder="İzin Bitiş Tarihi" />
            <label>İzin Türü </label>
            <MkkTextInput name="permissionTypeId" placeholder="İzin Türü" />
            <label>Persone Id</label>
            <MkkTextInput name="employeeId" placeholder="Personel Id" />
            <label>İzin Günü</label>
            <MkkTextInput name="permissionDay" placeholder="İzin Günü" />
            <label>Açıklama</label>
            <MkkTextInput name="statement" placeholder="Açıklama" />


            <Button color="blue" type="submit"  fluid >Ekle</Button>

        </Form>

    </Formik>
    )
}
