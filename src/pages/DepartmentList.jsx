import React, { useState, useEffect } from 'react';
import DepartmentService from '../services/departmentService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";



export default function DepartmentList() {

    const [departments, setDepartments] = useState([]);
    const departmentService = new DepartmentService()
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")

    // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
    useEffect(() => {

        departmentService.getDepartments().then(result => setDepartments(result.data.data))

    }, [])

    const postDelete = (id, error) => {
        error.preventDefault()
        axios.delete(`http://localhost:8080/api/departments/delete${id}`)
          .then(res => console.log("Delete DATA", res))
          .catch(error => console.log(error))
      }

  
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Departman Adı</Table.HeaderCell>
                        <Table.HeaderCell>Güncelle</Table.HeaderCell>
                        <Table.HeaderCell>Sil</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        departments.map(department => (

                            <Table.Row key={department.id}>
                                <Table.Cell>{department.id}</Table.Cell>
                                <Table.Cell>{department.name}</Table.Cell>
                                <Table.Cell><Button color="twitter" >Güncelle</Button></Table.Cell>
                                <Table.Cell><Button color="red" onClick={(error)=> postDelete(department.id , error)}  >Sil</Button></Table.Cell>

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
