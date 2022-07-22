import React from 'react'
import {Button,Menu,Dropdown,Image} from 'semantic-ui-react';


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
               <div>Hoşgeldiniz Sn. * Miraç GÜNTOĞAR *</div>
                <Dropdown pointing="top left">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>



        </div>
    )
}
