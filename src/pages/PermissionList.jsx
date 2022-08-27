import React, { useState, useEffect } from 'react';
import PermissionService from '../services/permissionService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { emphasize } from '@mui/material';
import EmployeeService from '../services/employeeService';


const permissionService = new PermissionService();



export default function PermissionList() {

    const [permissions, setPermissions] = useState([]);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");

    const [status, setStatus] = useState("");
    const navigate = useNavigate();


    useEffect(() => {

        permissionService.getPermissions().then(result => setPermissions(result.data.data));


    }, [])


    function handleDelete(id) {

        if (window.confirm("Are you sure delete?")) {
            permissionService.deletePermission(id).then(() => navigate('/permissionList'));
            window.location.reload();

        }
    }


    console.log(permissions)

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Personel Id</Table.HeaderCell>


                        <Table.HeaderCell>Personel Adı</Table.HeaderCell>
                        <Table.HeaderCell>Personel Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Departman</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>İzin Türü</Table.HeaderCell>
                        <Table.HeaderCell>İzin Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzin Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzi Günü Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Sil</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        permissions.map(permission => (

                            <Table.Row key={permission.id}>


                                <Table.Cell>{permission.employeeId}</Table.Cell>


                                <Table.Cell>{permission.employeeName}</Table.Cell>
                                <Table.Cell>{permission.employeeSurname}</Table.Cell>
                                <Table.Cell>{permission.employeeDepartment}</Table.Cell>
                                <Table.Cell>{permission.employeePosition}</Table.Cell>
                                <Table.Cell>{permission.permissionTypeName}</Table.Cell>
                                <Table.Cell>{permission.startingDate}</Table.Cell>
                                <Table.Cell>{permission.endDate}</Table.Cell>
                                <Table.Cell>{permission.permissionDay}</Table.Cell>
                                <Table.Cell>{permission.statement}</Table.Cell>



                                <Table.Cell><Button color="red" onClick={() => handleDelete(permission.id)} fluid >Sil</Button></Table.Cell>

                                <Table.Cell>

                                </Table.Cell>
                            </Table.Row>
                        ))


                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
