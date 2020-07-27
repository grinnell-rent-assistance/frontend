import React from 'react';
import { Container, Box, Button, ButtonGroup, makeStyles, createStyles, Typography, TextField } from '@material-ui/core';

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

  return (
    <Container>
      <Box className={textContainer}>
        <Typography variant={'h6'}>
          Welcome to the Grinnell Rent Assistance Portal! We are unaffiliated with Grinnell College.
        </Typography>
        <p>
          Enter your Grinnell College email address to receive a custom temporary link to either create your
          donator entry or request donations.
        </p>
        <Box>
          <TextField required className={textField} label="Please enter your email" variant="filled" />
          <ButtonGroup className={buttonGroup}>
            <Button className={item} color="primary" variant="contained" disableElevation>
              Donate
            </Button>
            <Button className={item} variant="contained" disableElevation>
              Receive
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;