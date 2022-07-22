import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/employeeService';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
  useEffect(() => {

    let employeeService = new EmployeeService()
    employeeService.getEmployees().then(result => setEmployees(result.data.data))

  }, [])


  return (
    <div>
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
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            employees.map(employee => (

              <Table.Row key={employee.id}>
                <Table.Cell><Link to={`/mirac/${employee.name}`}>{employee.tcNo}</Link></Table.Cell>
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
      </Table>    </div>
  )
}
