import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Dropdown, Select, Segment } from 'semantic-ui-react';
import MkkTextInput from '../utilities/customFormControls/MkkTextInput';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/employeeService';
import DepartmentService from '../services/departmentService';
import DropdownList from "react-widgets/DropdownList";
import PositionService from '../services/positionService';


const employeeService = new EmployeeService();
const departmentService = new DepartmentService();
const positionService = new PositionService();


export default function EmployeeAdd() {

    const userTypes = [
        { value: 'Admin', label: 'Admin' },
        { value: 'IK', label: 'İnsan Kaynakları' },
        { value: 'Personel', label: 'Personel' },
    ];

    const initialValues = {
        name: "",
        tcNo: 123,
        surname: "",
        startDateOfWork: "",
        leaveDateOfWork: "",
        birthday: "",
        phoneNumber: "",
        email: "",
        password: "",
       
    }

    const schema = Yup.object({
        name: Yup.string().required("Personel Adı zorunlu"),
        tcNo: Yup.number().required("Personel Tc zorunlu"),
        surname: Yup.string().required("Personel Soy Adı zorunlu"),
        startDateOfWork: Yup.date().required("İşe Başlama Tarihi Zorunlu"),
        leaveDateOfWork: Yup.date().required("İşten Ayrılma Tarihi Zorunlu"),
        birthday: Yup.date().required("Doğum Günü"),
        email: Yup.string().required("Email alanı doldurulması zorunlu").email(),
        phoneNumber: Yup.number().required("Telefon Numarası"),
        password: Yup.string().required("Şifre Zorunlu "),
       

    })

    const navigate = useNavigate();

    const [departments, setDepartments] = useState([]);
    const [departmentId, setDepartmentId] = useState();
    const [positions, setPositions] = useState([]);
    const [positionId, setPositionId] = useState();
    const [userType , setUserType] = useState();


    useEffect(() => {

        departmentService.getDepartments().then(result => setDepartments(result.data.data));
        positionService.getPositions().then(result => setPositions(result.data.data));


    }, [])



    const handleChangeDepartmentId = (e) => {

        setDepartmentId(e.target.value);

        console.log(e.target.value)

    };

    const handleChangePositionId = (e) => {

        setPositionId(e.target.value);
        console.log(e.target.value)


    };

    const handleChangeUserType = (e) => {

        setUserType(e.target.value);
        console.log(e.target.value)


    };
   
    return (
        <div>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {

                            const data = { ...values, positionId, departmentId, userType }

                            employeeService.addEmployee(data).then(result => {
                                console.log(result);
                                navigate('/employeeList');
                            })
                        }}
                        validator={() => ({

                        })}
                    >

                        <Form className='ui form' style={{ padding: '3em', marginBottom: '2em', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px', borderRadius: '10px' }}>
                            <Divider horizontal style={{ marginBottom: '2em' }}>Personel Ekle</Divider>
                            <label>Tc No</label>
                            <MkkTextInput name="tcNo" placeholder="Tc No" />
                            <label>Personel Adı</label>
                            <MkkTextInput name="name" placeholder="Personel Adı" />
                            <label>Personel Soyadı</label>
                            <MkkTextInput name="surname" placeholder="Personel Soyadı" />
                            <label>Personelin İşe Başlama Tarihi</label>
                            <MkkTextInput name="startDateOfWork" placeholder="İşe Başlama Tarihi" />
                            <label>Personelin İşten Ayrılma Tarihi</label>
                            <MkkTextInput name="leaveDateOfWork" placeholder="İşten Ayrılma Tarihi" />
                            <label>Doğum Günü</label>
                            <MkkTextInput name="birthday" placeholder="Doğum Günü" />
                            <label>Telefon Numarası</label>
                            <MkkTextInput name="phoneNumber" placeholder="Telefon Numarası" />
                            <label>Email</label>
                            <MkkTextInput name="email" placeholder="Email" />
                            <label>Şifre</label>
                            <MkkTextInput name="password" placeholder="Şifre" />

                            <label>Kullanıcı Türü
                                <select name="userType" onChange={handleChangeUserType}  >
                                   {userTypes.map(userType =>(
                                      <option key={userType.value} value={userType.value} >
                                        {userType.label}
                                            
                                      </option>
                                   ))}
                                       
                            
                                </select><br></br>
                            </label>
                            


                            <label>Pozisyon
                                <select name="positionId" onChange={handleChangePositionId}  >
                                    {positions.map(position => (
                                        <option key={position.id} value={position.id}  >
                                            {position.name}
                                        </option>
                                    ))}
                                </select><br></br>
                            </label>


                            <label>Departman
                                <select name="departmentId" onChange={handleChangeDepartmentId}  >
                                    {departments.map(department => (
                                        <option key={department.id} value={department.id}  >
                                            {department.name}
                                        </option>
                                    ))}
                                </select><br></br>
                            </label>



                            <Button color="twitter" type="submit" fluid>Ekle</Button>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </div >
    )
}







