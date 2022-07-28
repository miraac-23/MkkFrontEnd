import React from 'react';
import EmployeeList from '../pages/EmployeeList'
import Positions from './Positions';
import { Button, Icon, Label, Grid } from 'semantic-ui-react';
import Position from './Positions';
import { Routes, Route } from "react-router";
import EmployeeDetail from '../pages/EmployeeDetail';
import EmployeeAdd from '../pages/EmployeeAdd';
import DepartmentAdd from '../pages/DeparmentAdd';
import PositionAdd from '../pages/PositionAdd';
import DepartmentList from '../pages/DepartmentList';
import PositionList from '../pages/PositionList';
import Deneme from '../pages/Deneme'
import EmployeeUpdate from '../pages/EmployeeUpdate';
import PermissionAdd from '../pages/PermissionAdd';
import PermissionList from '../pages/PermissionList';
import Login from '../pages/Login';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Position />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes   >
                            <Route exact path="/employeeList"  element={<EmployeeList/>} />
                            <Route  path="/employeeList/:name"  element={<EmployeeDetail/>} />
                            <Route  path="/employeeDetail"  element={<EmployeeDetail/>} />
                            <Route  path="/employee/add"  element={<EmployeeAdd/>} />
                            <Route  path="/department/add"  element={<DepartmentAdd/>} />
                            <Route  path="/position/add"  element={<PositionAdd/>} />
                            <Route  path="/departmentList"  element={<DepartmentList/>} />
                            <Route  path="/positionList"  element={<PositionList/>} />
                            <Route  path="/employeeUpdate"  element={<EmployeeUpdate/>} />
                            <Route  path="/permissionAdd"  element={<PermissionAdd/>} />
                            <Route  path="/permissionList"  element={<PermissionList/>} />
                            <Route  path="/login"  element={<Login/>} />



                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
