import React from 'react';
import { Button,Menu } from 'semantic-ui-react';

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} primary>Çıkış Yap</Button>

            </Menu.Item>




        </div>
    )
}
