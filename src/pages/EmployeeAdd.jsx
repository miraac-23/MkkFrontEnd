import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import MkkTextInput from '../utilities/customFormControls/MkkTextInput'



export default function EmployeeAdd() {

    const initialValues = { name: "", tcNo: 123 }

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
        tcNo: Yup.number().required("Personel Tc zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <MkkTextInput name="tcNo" placeholder="Tc No" />
                    <MkkTextInput name="name" placeholder="Personel Adı" />
                    <MkkTextInput name="surname" placeholder="Personel Soyadı" />
                    <MkkTextInput name="startDateOfWork" placeholder="İşe Başlama Tarihi" />
                    <MkkTextInput name="leaveDateOfWork" placeholder="İşten Ayrılma Tarihi" />
                    <MkkTextInput name="birthday" placeholder="Doğum Günü" />
                    <MkkTextInput name="phoneNumber" placeholder="Telefon Numarası" />
                    <MkkTextInput name="email" placeholder="Email" />
                    <MkkTextInput name="password" placeholder="Şifre" />
                    <MkkTextInput name="userType" placeholder="Kullanıcı Tipi" />
                    <MkkTextInput name="positionId" placeholder="Pozisyon Id si" />
                    <MkkTextInput name="departmentId" placeholder="Departman Id si" />

                    {/* <FormField>
                        <Field name="name" placeholder="Personel Adı" ></Field>

                        <ErrorMessage name="name" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>

                    </FormField> */}

                    <Button color="green" type="submit">Ekle</Button>

                </Form>

            </Formik>
        </div>
    )
}
