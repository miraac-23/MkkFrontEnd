import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService';
import React, { useState, useEffect } from 'react';

export default function EmployeeDetail() {

    let { name } = useParams()
    const [employee, setEmployee] = useState({});

    // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
    // useEffect(() => {

    //     let employeeService = new EmployeeService()
    //     employeeService.getEmployeesByName(name).then(result => setEmployee(result.data.data))

    // }, [])

    return (
        <div>

            PersonelId: {name}
            {/* <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>adı : {name}</Card.Header>
                        <Card.Meta>Miraç</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group> */}
        </div>
    )
}
