import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Image, Icon } from 'semantic-ui-react';
import { NavLink, Link } from "react-router-dom";

export default function NoAccesPermission() {
    const navigate = useNavigate();


    function handleClick() {
      
           navigate('/home')
       
       }


    return (


        <div>
            <Grid>

                <Grid.Row>
                    <h1 style={{ marginLeft: '12em' }}>Bu Sayfaya Erişim İzniniz Bulunmamaktadır</h1>
                </Grid.Row>

                <Grid.Row>
                    <Image src="https://mkkgabim.com.tr/assets/site/images/logo.png" style={{ marginLeft: '30em' }} ></Image>
                </Grid.Row>
                <Grid.Row>
                    <Button style={{backgroundColor: 'brown', color: 'black', textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }} onClick={handleClick} fluid>Ana Sayfa</Button>
                </Grid.Row>

            </Grid>
        </div>
    )
}
