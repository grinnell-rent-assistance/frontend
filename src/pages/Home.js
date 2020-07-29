import React from 'react';
import { Container, Box, Button, ButtonGroup, makeStyles, createStyles, Typography, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import isGrinnellEmail from '../utils/isGrinnellEmail';

const useStyles = makeStyles((theme) => createStyles({
  textContainer: {
    maxWidth: 500,
    margin: 'auto',
    textAlign: 'center',
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
  }
})
);

function Home(props) {
  const { textContainer, item, buttonGroup, textField } = useStyles();

  const [email, setEmail] = React.useState('');
  const [redirect, setRedirect] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('Enter your Grinnell College email address (@grinnell.edu)');

  function receive() {
    if (isGrinnellEmail(email)) {
      props.onChange(email);
      setRedirect(<Redirect to={"/request"}/>);
    } else {
      setError(true);
      setMessage('Please enter a valid email');
    }
  }

  return (
    <Container>
      {redirect}
      <Box className={textContainer}>
        <Typography variant={'h5'}>
          Welcome to the Grinnell Rent Assistance Portal! We are unaffiliated with Grinnell College.
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
            <Button className={item} color="primary" variant="contained" disableElevation>
              Donate
            </Button>
            <Button className={item} variant="contained" onClick={receive} disableElevation>
              Receive
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;