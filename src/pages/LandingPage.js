import React from 'react';
import { TextareaAutosize, TextField, FormControl, Container, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import isGrinnellEmail from '../utils/isGrinnellEmail';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        maxWidth: 500,
        margin: 'auto',
        textAlign: 'center',
    }
})
);

function LandingPage(props) {
    const { root } = useStyles();

    return (
        <Container className={root}>
            {isGrinnellEmail(props.email) ? null : <Redirect to="/" />}
            <Typography variant={'h4'}>
                Verification
          </Typography>
            <p style={{fontSize:16}}>
                We just sent a link to
                <strong>
                    {' ' + props.email}
                </strong>
                .<br/>Please follow the link to verify your email.
          </p>
        </Container >
    )
}

export default LandingPage;