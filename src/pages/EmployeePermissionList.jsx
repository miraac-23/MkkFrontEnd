import React, { useState, useEffect, useRef } from 'react';
import EmployeeService from '../services/employeeService';
import { Icon, Menu, Table, Button, Grid, Divider } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default function EmployeePermissionList() {

  const [employees, setEmployees] = useState([]);
  const employeeService = new EmployeeService();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();


  
  // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
  useEffect(() => {

    employeeService.getEmployees().then(result => setEmployees(result.data.data))

  }, [])

  function handleDelete(id) {

    if (window.confirm("Are you sure delete?")) {
      employeeService.deleteEmployee(id)
        .then(() => setStatus('Delete successful'));
    }
  }

  function handleUpdate(id) {
    navigate('/employeeUpdate' + id)

  }

  function handlePermission(tcNo) {
    navigate('/employeePermission' + tcNo)

  }


  return (
    <div>
      <Grid>
        <Grid.Row>

          <Grid.Column width={16}>
            <Divider horizontal style={{ textSize: '1000px', marginBottom: '2em', marginLeft: '6em', fontSize: '30px', fontWeight: 'bold' }}>PERSONEL LİSTESİ</Divider>

            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Personel Adı</Table.HeaderCell>
                  <Table.HeaderCell>Personel Soyadı</Table.HeaderCell>
                  <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                  <Table.HeaderCell>Kullanıcı Tipi</Table.HeaderCell>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Deapartman</Table.HeaderCell>
                  <Table.HeaderCell>İzin Ekle</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                  employees.map(employee => (

                    <Table.Row key={employee.id}>
                      <Table.Cell>{employee.name}</Table.Cell>
                      <Table.Cell>{employee.surname}</Table.Cell>
                      <Table.Cell>{employee.phoneNumber}</Table.Cell>
                      <Table.Cell>{employee.userType}</Table.Cell>
                      <Table.Cell>{employee.positionName}</Table.Cell>
                      <Table.Cell>{employee.departmentName}</Table.Cell>
                      <Table.Cell><Button color="blue" onClick={() => handlePermission(employee.tcNo)} fluid >İzin Ekle</Button></Table.Cell>

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
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}
