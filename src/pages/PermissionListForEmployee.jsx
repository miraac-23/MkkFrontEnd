import React, { useState, useEffect } from 'react';
import PermissionService from '../services/permissionService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { emphasize } from '@mui/material';
import EmployeeService from '../services/employeeService';

const permissionService = new PermissionService();
const employeeService = new EmployeeService();



export default function PermissionListForEmployee() {

    const [permissions, setPermissions] = useState([]);
    const [IzinHakkı, setIzinHakkı] = useState();
    const [message, setMessage] = useState("");
    const [employees, setEmployees] = useState([]);



    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const [role, setRole] = useState(JSON.parse(window.localStorage.getItem("user")));

    const [found, setFound] = useState();

    const [name, setName] = useState('');
    const [employeePermissionSum, setEmployeePermissionSum] = useState([]);

    const [remainingPermission, setRemainingPermission] = useState();



    const filtered = permissions.filter(employee => {

        return employee.employeeUserName == name;
    });


    const foundPermission = employeePermissionSum.find((permissionSum) => {

        return permissionSum.employeeId == 58;

    });




    useEffect(() => {

        employeeService.getEmployees().then(result => setEmployees(result.data.data))

        permissionService.getPermissions().then(result => setPermissions(result.data.data));
        permissionService.getPermissionDaySum().then(result => setEmployeePermissionSum(result.data.data));
        setName(role.username)


    }, [])




    function handle() {

        const filtre = employees.find(employee => {

            return employee.email == name;
        });



        let resultPermissions = 0;

        let newDate = new Date()

        let currentYear = newDate.getUTCFullYear();
        let currentMounth = (newDate.getUTCMonth() + 1).toString();
        let currentDay = newDate.getDate();

        let employeeYear = filtre.startDateOfWork.substring(0, 4);
        let employeeMounth = (filtre.startDateOfWork.substring(5, 7));
        let employeeDay = filtre.startDateOfWork.substring(8, 10);

        let resultYear = (currentYear - employeeYear);
        let resultMounth = Math.abs((currentMounth - employeeMounth));
        let resultDay = Math.abs((currentDay - employeeDay));



        if (resultYear == 0) {
            setIzinHakkı(0)
        } else {
            let hakEdilenIzin = 0;
            if (currentMounth <= employeeMounth) {

                for (let i = 1; i <= resultYear; i++) {

                    if (i <= 5) {
                        hakEdilenIzin += 14;
                    }
                    if (i > 5 && i <= 15) {
                        hakEdilenIzin += 20;
                    }
                    if (i > 15) {
                        hakEdilenIzin += 26;
                    }
                }
                setIzinHakkı(hakEdilenIzin);

            }
            else {
                for (let i = 1; i <= resultYear; i++) {

                    if (i <= 5) {
                        hakEdilenIzin += 14;
                    }
                    if (i > 5 && i <= 15) {
                        hakEdilenIzin += 20;
                    }
                    if (i > 15) {
                        hakEdilenIzin += 26;
                    }
                }
                setIzinHakkı(hakEdilenIzin);
            }
        }

        try {
            const foundPermission = employeePermissionSum.find((permissionSum) => permissionSum.employeeId == filtre.id)

            setRemainingPermission(foundPermission.employeePermissionDaySum);

        } catch (e) {

            setMessage(0)
            
        }



    }






    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>


                        <Table.HeaderCell>Personel Adı</Table.HeaderCell>
                        <Table.HeaderCell>Personel Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Departman</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>İzin Türü</Table.HeaderCell>
                        <Table.HeaderCell>İzin Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzin Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>İzi Günü Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {
                        filtered.map(permission => (

                            <Table.Row key={permission.id}>




                                <Table.Cell>{permission.employeeName}</Table.Cell>
                                <Table.Cell>{permission.employeeSurname}</Table.Cell>
                                <Table.Cell>{permission.employeeDepartment}</Table.Cell>
                                <Table.Cell>{permission.employeePosition}</Table.Cell>
                                <Table.Cell>{permission.permissionTypeName}</Table.Cell>
                                <Table.Cell>{permission.startingDate}</Table.Cell>
                                <Table.Cell>{permission.endDate}</Table.Cell>
                                <Table.Cell>{permission.permissionDay}</Table.Cell>
                                <Table.Cell>{permission.statement}</Table.Cell>




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

                                <Button color='green' onClick={handle} fluid>Hesapla</Button>

                                Hak edilen izin :{IzinHakkı} <br />
                                Kullanılan izin :{remainingPermission} {message}<br />
                                Kalan izin : {(IzinHakkı) - (remainingPermission)}  {message}  <br />

                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
