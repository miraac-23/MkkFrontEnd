import EmployeeList from '../pages/EmployeeList'
import Positions from './Positions';
import { Grid } from 'semantic-ui-react'
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
import HomePage from '../pages/HomePage';
import PermissionTypeAdd from '../pages/PermissionTypeAdd';
import PermissionTypeList from '../pages/PermissionTypeList';
import NoAccesPermission from '../pages/NoAccesPermission';
import EmployeePermission from '../pages/EmployeePermission';


export default function Dashboard() {


    return (
        <div>
            <Grid >

                <Grid.Column >
                    <Routes  >

                        <Route path="/home" element={<HomePage />} />
                        <Route path="/" element={<Login />} />
                        <Route exact path="/employeeList" element={<EmployeeList />} />
                        <Route path="/employeeList/:id" element={<EmployeeDetail />} />
                        <Route path="/employeeDetail" element={<EmployeeDetail />} />
                        <Route path="/employee/add" element={<EmployeeAdd />} />
                        <Route path="/department/add" element={<DepartmentAdd />} />
                        <Route path="/position/add" element={<PositionAdd />} />
                        <Route path="/departmentList" element={<DepartmentList />} />
                        <Route path="/positionList" element={<PositionList />} />
                        <Route exact path="/employeeUpdate" element={<EmployeeUpdate />} />
                        <Route path="/employeeUpdate:id" element={<EmployeeUpdate />} />
                        <Route exact path="/permissionAdd" element={<PermissionAdd />} />
                        <Route path="/permissionAdd:id" element={<PermissionAdd />} />
                        <Route path="/permissionList" element={<PermissionList />} />
                        <Route path="/deneme" element={<Deneme />} />
                        <Route path="/permissionTypeAdd" element={<PermissionTypeAdd />} />
                        <Route path="/permissionTypeList" element={<PermissionTypeList />} />
                        <Route path="/noAccessPermission" element={<NoAccesPermission />} />
                        <Route path="/employeePermission" element={<EmployeePermission />} />


                    </Routes>
                </Grid.Column>
            </Grid>
        </div >
    )
}
