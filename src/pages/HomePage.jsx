import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, Button, Divider, Form as SemanticForm, Message, Card, Image } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <div>
            <Image src="https://mkkgabim.com.tr/assets/site/images/logo.png" style={{ alignItems: 'center', }}></Image>
        </div>
    )
}
