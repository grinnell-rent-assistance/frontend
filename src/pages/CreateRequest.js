import React from 'react';
import { TextareaAutosize, TextField, FormControl, Container, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import isGrinnellEmail from '../utils/isGrinnellEmail';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    textAlign: 'center',
  },
  form: {
    textAlign: 'left',
    maxWidth: 450,
    margin: 'auto',
  },
  button: {
    marginTop: theme.spacing(1),
  }
})
);

function CreateRequest(props) {
  const { root, form, button } = useStyles();

  return (
    <Container className={root}>
      {isGrinnellEmail(props.email)? null: <Redirect to="/" />}
      <FormControl className={form}>
        <Typography variant="h5">
          Create a Request
        </Typography>
        <p>
          Fill out this form to set up your page. A confirmation email will be sent to
          <strong>
            {' ' + props.email}
          </strong>
        </p>
        <TextField label="Cash App"/>
        <TextField label="Venmo" />
        <TextField label="Desired amount" /> <br />
        <TextareaAutosize rowsMin={3} placeholder="Extra Details" />
        <Button className={button} variant="contained">
          Submit
        </Button>
      </FormControl>
    </Container>
  )
}

export default CreateRequest;