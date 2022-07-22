import React from 'react';
import EmployeeList from '../pages/EmployeeList'
import Positions from './Positions';
import { Button, Icon, Label, Grid } from 'semantic-ui-react';
import Position from './Positions';
import { Routes, Route } from "react-router";
import EmployeeDetail from '../pages/EmployeeDetail';
import EmployeeAdd from '../pages/EmployeeAdd';

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
                            <Route exact path="/"  element={<EmployeeList/>} />
                            <Route exact path="/mirac"  element={<EmployeeDetail/>} />
                            <Route  path="/mirac/:"  element={<EmployeeDetail/>} />
                            <Route  path="/employee/add"  element={<EmployeeAdd/>} />


                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
