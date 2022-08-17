import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Image, Icon } from 'semantic-ui-react';
import { NavLink, Link } from "react-router-dom";



export default function HomePage() {
    const navigate = useNavigate();

    const [role, setRole] = useState(JSON.parse(window.localStorage.getItem("user")));




    function handleClickEmployeeList() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/employeeList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickEmployeeAdd() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/employee/add')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPermissionList() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/permissionList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPermissionAdd() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/employeeList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickDepartmentList() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/departmentList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickDepartmentAdd() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/departmentAdd')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPositionList() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/positionList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPositionAdd() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/positionAdd')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPermissionTypeList() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/permissionTypeList')
        } else {
            navigate('/noAccessPermission')
        }

    }

    function handleClickPermissionTypeAdd() {
        if (role.roles[0] === "ROLE_Admin" || role.roles[0] === "ROLE_IK") {
            navigate('/permissionTypeAdd')
        } else {
            navigate('/noAccessPermission')
        }

    }




    return (


        <div>
            <Grid>

                {/* <Grid.Row>
                    <h1 style={{ marginLeft: '15em' }}>PERSONEL İZİN TAKİP SİSTEMİ</h1>
                </Grid.Row> */}

                <Grid.Row>
                    <Image src="https://mkkgabim.com.tr/assets/site/images/logo.png" style={{ marginLeft: '30em' }} ></Image>
                </Grid.Row>


                <Grid.Row style={{ marginLeft: '5em' }}>
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://www.softacar.com/images/164426.svg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Personel Listeleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>

                            <Button onClick={handleClickEmployeeList} color='yellow' fluid>Listele</Button>

                        </Card.Content>
                    </Card>


                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://www.softacar.com/images/164426.svg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Personel Ekleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>

                            <Button onClick={handleClickEmployeeAdd} color='yellow' fluid>Ekle</Button>

                        </Card.Content>
                    </Card>
                    <br />
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://static.daktilo.com/sites/1085/uploads/2022/05/31/large/yillik-izin.jpg" wrapped ui={false} style={{ marginBottom: '5em', marginTop: '2em' }} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>İzin Listeleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickPermissionList} color='yellow' fluid>Listele</Button>
                        </Card.Content>
                    </Card>
                    <br />
                </Grid.Row>

                <Grid.Row style={{ marginLeft: '5em' }}>
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://static.daktilo.com/sites/1085/uploads/2022/05/31/large/yillik-izin.jpg" wrapped ui={false} style={{ marginBottom: '5em', marginTop: '2em' }} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>İzin Ekleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickPermissionAdd} color='yellow' fluid>Ekle</Button>
                        </Card.Content>
                    </Card>


                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://icon-library.com/images/it-department-icon/it-department-icon-19.jpg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Departman Listeleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickPositionList} color='yellow' fluid>Listele</Button>
                        </Card.Content>
                    </Card>
                    <br />
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://icon-library.com/images/it-department-icon/it-department-icon-19.jpg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Departman Ekleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickDepartmentAdd} color='yellow' fluid>Ekle</Button>
                        </Card.Content>
                    </Card>
                    <br />
                </Grid.Row>


                <Grid.Row style={{ marginLeft: '5em' }}>
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://icon-library.com/images/it-department-icon/it-department-icon-16.jpg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Pozisyon Listeleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickPositionList} color='yellow' fluid>Listele</Button>
                        </Card.Content>
                    </Card>


                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://icon-library.com/images/it-department-icon/it-department-icon-16.jpg" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Pozisyon Ekleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={handleClickPositionAdd} color='yellow' fluid>Ekle</Button>
                        </Card.Content>
                    </Card>
                    <br />
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/017/051/original/type_6358299.png" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>İzin Türü Listeleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                                <Button onClick={handleClickPermissionTypeList} color='yellow' fluid>Listele</Button>
                        </Card.Content>
                    </Card>
                    <br />
                </Grid.Row>

                <Grid.Row style={{ marginLeft: '5em' }}>
                    <br />
                    <Card style={{ marginRight: '5em' }}>
                        <Image src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/017/051/original/type_6358299.png" wrapped ui={false} />
                        <Card.Content style={{ backgroundColor: 'white' }}>
                            <Card.Header style={{ color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>İzin Türü Ekleme Ekranı</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                                <Button onClick={handleClickPermissionTypeAdd} color='yellow' fluid>Ekle</Button>
                        </Card.Content>
                    </Card>



                </Grid.Row>




            </Grid>
        </div>
    )
}
