import React from 'react';
import { Container, Box, Button, ButtonGroup, makeStyles, createStyles, Typography, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import isGrinnellEmail from '../utils/isGrinnellEmail';

const useStyles = makeStyles((theme) => createStyles({
  textContainer: {
    maxWidth: 700,
    margin: 'auto',
    textAlign: 'center',
    background: "text.primary",
  },
  item: {
    flex: 1,
  },
  buttonGroup: {
    display: 'flex',
  },
  textField: {
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  body: {
    marginTop: theme.spacing(10),
    padding: '20x',
    margin: 100,
  },
})
);

function Home(props) {
  const { textContainer, item, buttonGroup, textField, body } = useStyles();

  const [email, setEmail] = React.useState('');
  const [redirect, setRedirect] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('Enter your Grinnell College email address (@grinnell.edu)');

  function receive() {
    if (isGrinnellEmail(email)) {
      props.onChange(email);
      setRedirect(<Redirect to={"/request"} />);
    } else {
      setError(true);
      setMessage('Please enter a valid email');

    }
  }

  function verification() {
    if (isGrinnellEmail(email)) {
      props.onChange(email);
      setRedirect(<Redirect to={"/verification"} />);
    } else {
      setError(true);
      setMessage('Please enter a valid email');
    }

  }

  return (
    <Container>
      {redirect}
      <Box className={textContainer}>
        <Typography variant={'h4'}>
          Welcome to the Grinnell Rent Assistance Portal!
        </Typography>
        <Typography variant={'h5'}>
          We are unaffiliated with Grinnell College.
        </Typography>
        <p>
          Enter your Grinnell College email address to receive a custom temporary link to contribute or receive.
        </p>
        <Box>
          <TextField
            required
            className={textField}
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            helperText={message}
          />
          <ButtonGroup className={buttonGroup}>
            <Button className={item} color="primary" variant="contained" onClick={verification} disableElevation>
              Donate
            </Button>
            <Button className={item} variant="contained" onClick={receive} disableElevation>
              Receive
            </Button>
          </ButtonGroup>
        </Box>
      </Box>

      <Box className={body}>
      <Typography align ='center' variant={'h5'}>
          Title
        </Typography>
        <Typography variant={'body1'} display={'block'} marginTop='10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>

    </Container>
  )
}

export default Home;