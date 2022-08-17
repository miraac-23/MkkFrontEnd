import React, { useState, useEffect } from 'react';
import { Dropdown, Menu, Container, Button } from 'semantic-ui-react';
import SignOut from './SignOut';
import SignedIn from './SignedIn';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService';
import { NavLink } from "react-router-dom";




export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate();



    function handleSignedOut() {

        authService.logout("user")
        setIsAuthenticated(false)
        navigate('/')


    }

    function handleSignedIn() {
        setIsAuthenticated(true)
        navigate('/home')
    }

    function handleSignOut() {
        setIsAuthenticated(false)
    }


    return (
        <div>
            <Menu inverted fixed="top" size="large">
                <Container>

                    <Menu.Item name='messages'><NavLink to="/home">Gabim Mkk Gayrimenkul Bilgi Merkezi</NavLink></Menu.Item>
                    <Menu.Item name='home'><NavLink to="/home">Ana Sayfa</NavLink></Menu.Item>
                    <Menu.Menu position='right'>
                        {
                            isAuthenticated ? <SignedIn signOut={handleSignedOut} /> : <SignOut signIn={handleSignedIn} />
                        }
                    </Menu.Menu>
                </Container>

            </Menu>
        </div >
    )
}
