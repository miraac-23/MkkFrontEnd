import React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";



export default function Positions() {
    return (
        <div>
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


        </div >
    )
}

//<NavLink to="/departments/add"></NavLink>