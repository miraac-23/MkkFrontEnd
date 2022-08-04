import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Image } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


export default function HomePage() {
    return (


        <div>
            <Grid>
                <Grid.Row>


                    <Image src="https://mkkgabim.com.tr/assets/site/images/logo.png" style={{ marginLeft: '30em' }} ></Image>

                </Grid.Row>
                <Grid.Row>


                    <h1 style={{ marginLeft: '15em'}}>PERSONEL İZİN TAKİP SİSTEMİ</h1>
                </Grid.Row>
            </Grid>
        </div>
    )
}
