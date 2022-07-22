import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
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
                    <MkkTextInput name="name" placeholder="Personel Adı" />
                    <MkkTextInput name="tcNo" placeholder="Tc No" />

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
