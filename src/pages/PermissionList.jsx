import React, { useState, useEffect } from 'react';
import PermissionService from '../services/permissionService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function PermissionList() {

    const [permissions, setPermissions] = useState([]);
    const permissionService = new PermissionService();
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");

    const [status, setStatus] = useState("");

    useEffect(() => {

        permissionService.getPermissions().then(result => setPermissions(result.data.data))

    }, [])


    function handleDelete(id) {

        if (window.confirm("Are you sure delete?")) {
            permissionService.deletePermission(id)
                .then(() => setStatus('Delete successful'));
        }
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İzin Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzin Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzi Günü Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>İzin Türü</Table.HeaderCell>
                        <Table.HeaderCell>Personel</Table.HeaderCell>
                        <Table.HeaderCell>Sil</Table.HeaderCell>
                        <Table.HeaderCell>Güncelle</Table.HeaderCell>
                        <Table.HeaderCell>Sil</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        permissions.map(permission => (

                            <Table.Row key={permission.id}>
                                <Table.Cell>{permission.startingDate}</Table.Cell>
                                <Table.Cell>{permission.endDate}</Table.Cell>
                                <Table.Cell>{permission.permissionDay}</Table.Cell>
                                <Table.Cell>{permission.statement}</Table.Cell>
                                <Table.Cell>{permission.permissionTypeId}</Table.Cell>
                                <Table.Cell>{permission.employeeId}</Table.Cell>

                                <Table.Cell><Button color="twitter" >Güncelle</Button></Table.Cell>
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
            </Table>        </div>
    )
}
