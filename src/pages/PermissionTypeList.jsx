import React, { useState, useEffect } from 'react';
import DepartmentService from '../services/departmentService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";
import PermissionTypeService from '../services/permissionTypeService';
import { useNavigate } from 'react-router-dom';


const permissionTypeService = new PermissionTypeService();
export default function PermissionTypeList() {

    const [permissionTypes , setPermissionTypes] = useState([]);
    const [status, setStatus] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        
        permissionTypeService.getPermissionTypes().then(result => setPermissionTypes(result.data.data))

    },[])


    function handleDelete(id) {

        if (window.confirm("Are you sure delete?")) {
            permissionTypeService.deletePermissionType(id)
            .then(() => 
            setStatus('Delete successful'),
            window.location.reload()
            
            );
        }  
    }


    return (
        <div>
             <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Departman Adı</Table.HeaderCell>
                        <Table.HeaderCell>Sil</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        permissionTypes.map(permissionType => (

                            <Table.Row key={permissionType.name}>
                                <Table.Cell>{permissionType.id}</Table.Cell>
                                <Table.Cell>{permissionType.name}</Table.Cell>
                                {/* <Table.Cell><Button color="twitter" >Güncelle</Button></Table.Cell> */}
                                <Table.Cell><Button color="red" onClick={()=>handleDelete(permissionType.id)} fluid >Sil</Button></Table.Cell>

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
