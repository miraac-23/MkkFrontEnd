import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/employeeService';
import { Icon, Menu, Table, Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";







export default function EmployeeList() {

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
    alert(id)

  }


  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Menu pointing vertical>
              {/* <Menu.Item
                    name='Personel Ekle'
                />
                <Menu.Item
                    name='Departman Ekle'
                />
                <Menu.Item
                    name='Pozisyon Ekle'
                />
                <Menu.Item
                    name='İzin Girişi'
                >
                </Menu.Item> */}
              <NavLink to="/employee/add" >Personel Ekleme </NavLink> <br />

              <NavLink to="/department/add">Departman ekleme</NavLink> <br />

              <NavLink to="/position/add">Pozisyon ekleme</NavLink> <br />

              <NavLink to="/employeeList">Personel Listeleme </NavLink> <br />

              <NavLink to="/departmentList">Departman Listeleme</NavLink> <br />

              <NavLink to="/positionList">Pozisyon Listeleme</NavLink> <br />



            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Tc No</Table.HeaderCell>
                  <Table.HeaderCell>Personel Adı</Table.HeaderCell>
                  <Table.HeaderCell>Personel Soyadı</Table.HeaderCell>
                  <Table.HeaderCell>İşe Başlama Tarihi</Table.HeaderCell>
                  <Table.HeaderCell>İşten Ayrılma Tarihi</Table.HeaderCell>
                  <Table.HeaderCell>Doğum Günü</Table.HeaderCell>
                  <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Kullanıcı Tipi</Table.HeaderCell>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Deapartman</Table.HeaderCell>
                  <Table.HeaderCell>Düzenle</Table.HeaderCell>
                  <Table.HeaderCell>Sil</Table.HeaderCell>

                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                  employees.map(employee => (

                    <Table.Row key={employee.id}>
                      <Table.Cell><Link to={`/employeeList/${employee.name}`}>{employee.tcNo}</Link></Table.Cell>
                      <Table.Cell>{employee.name}</Table.Cell>
                      <Table.Cell>{employee.surname}</Table.Cell>
                      <Table.Cell>{employee.startDateOfWork}</Table.Cell>
                      <Table.Cell>{employee.leaveDateOfWork}</Table.Cell>
                      <Table.Cell>{employee.birthday}</Table.Cell>
                      <Table.Cell>{employee.phoneNumber}</Table.Cell>
                      <Table.Cell>{employee.email}</Table.Cell>
                      <Table.Cell>{employee.userType}</Table.Cell>
                      <Table.Cell>{employee.positionId}</Table.Cell>
                      <Table.Cell>{employee.departmentId}</Table.Cell>
                      <Table.Cell><Button color="green" onClick={() => handleUpdate(employee.id)} fluid >Düzenle</Button></Table.Cell>
                      <Table.Cell><Button color="red" onClick={() => handleDelete(employee.id)} fluid >Sil</Button></Table.Cell>

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
