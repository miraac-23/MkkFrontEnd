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


export default function Dashboard() {
   
    
    return (
        <div>
            <Grid >
          
            <Grid.Column >
                <Routes  >

                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login />} />
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
                    <Route path="/permissionAdd" element={<PermissionAdd />} />
                    <Route path="/permissionList" element={<PermissionList />} />

                </Routes>
            </Grid.Column>
        </Grid>
        </div >
    )
}
