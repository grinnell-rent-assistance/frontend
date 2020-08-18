import React from 'react';
import { TextareaAutosize, TextField, Box, Container, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import isGrinnellEmail from '../utils/isGrinnellEmail';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        maxWidth: 700,
        margin: 'auto',
        textAlign: 'center',
    },
})
);

function About(props) {
    const { root } = useStyles();

    return (
        <Container className={root}>
            <Box>
                <Typography align='center' variant={'h4'} paragraph={true}>
                    What is GRAP?
        </Typography>
                <Typography variant={'body1'} display={'block'} marginTop={'10'}>
                    With Grinnell College's volatile plan for the upcoming Fall semester, many of our classmates are facing
                    difficult decisions. In particular, with the college's decision to delay the on-campus
                    arrival of first-year/transfer students and transition to completely remote learning, many students have
                    had to make last minute decisions for their living situations. <br/><br/>
                    (More to come)
        </Typography>
            </Box>
        </Container >
    )
}

export default About;