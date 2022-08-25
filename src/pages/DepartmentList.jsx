import React, { useState, useEffect } from 'react';
import DepartmentService from '../services/departmentService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'



const departmentService = new DepartmentService();

export default function DepartmentList() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



    const [departments, setDepartments] = useState([]);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
    useEffect(() => {

        departmentService.getDepartments().then(result => setDepartments(result.data.data))

    }, [])


    function handleDelete(id) {

        if (window.confirm("Are you sure delete?")) {
            departmentService.deleteDepartment(id).then(() => setStatus('Delete successful'));
            window.location.reload();

        }
    }


    return (
        <div style={{display: 'flex', }}>

          


                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Departman Adı</Table.HeaderCell>
                            {/* <Table.HeaderCell>Güncelle</Table.HeaderCell> */}
                            <Table.HeaderCell>Sil</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        {
                            departments.map(department => (

                                <Table.Row key={department.id}>
                                    <Table.Cell>{department.id}</Table.Cell>
                                    <Table.Cell>{department.name}</Table.Cell>
                                    {/* <Table.Cell><Button color="twitter" >Güncelle</Button></Table.Cell> */}
                                    <Table.Cell><Button color="red" onClick={() => handleDelete(department.id)} fluid >Sil</Button></Table.Cell>

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
