import React from 'react';

import { Box, Button, AppBar, Toolbar, Typography, createStyles, makeStyles, MuiThemeProvider, CssBaseline } from '@material-ui/core';

import { Switch, Route, Link } from 'react-router-dom';

import { LightTheme, DarkTheme } from './theme';
import Home from './pages/Home';
import CreateRequest from './pages/CreateRequest';
import LandingPage from './pages/LandingPage';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexgrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
  darkModeButton: {
    position: 'absolute',
    right: '2%',
  },
})
);

function App() {
  const { darkModeButton, container, Toggle } = useStyles();
  const [email, setEmail] = React.useState('');
  const [theme, setTheme] = React.useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <MuiThemeProvider theme={theme === 'light' ? LightTheme() : DarkTheme()}>
      <CssBaseline>
        <Box style={{ height: '100%' }}>
          <AppBar position="static">
            <Toolbar>
              <Button component={Link} to="/" >
                <Typography variant="h5">
                  GRAP
            </Typography>
              </Button>
              <Button className={darkModeButton} onClick={themeToggler} variant="contained">Switch Theme</Button>
            </Toolbar>
          </AppBar>
          {/* Begin Router */}
          <Box className={container}>
            <Switch>
              <Route exact path="/">
                <Home onChange={setEmail} />
              </Route>
              {/* <Route path="/request">
              <CreateRequest email={email} />
            </Route> */}
              <Route path="/verification">
                <LandingPage email={email} />
              </Route>
            </Switch>
          </Box>
        </Box>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
