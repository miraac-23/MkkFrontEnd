import React, {useState,useEffect} from 'react';
import { Dropdown, Menu, Container } from 'semantic-ui-react';
import SignOut from './SignOut';
import SignedIn from './SignedIn';
import { useNavigate } from "react-router-dom";


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate();

    function handleSignedOut(){
        setIsAuthenticated(false)
        navigate('/')

    }

    function handleSignedIn() {
        setIsAuthenticated(true) 
    }


    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        {
                            isAuthenticated?<SignedIn signOut= {handleSignedOut}/>: <SignOut signIn={handleSignedIn}/>
                        }       
                    </Menu.Menu>
                </Container>

            </Menu>
        </div >
    )
}
