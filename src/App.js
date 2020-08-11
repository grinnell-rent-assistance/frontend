import React from 'react';


import { Box, Button, AppBar, Toolbar, Typography, createStyles, makeStyles, MuiThemeProvider, CssBaseline, Switch as Toggler, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';

import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import { LightTheme, DarkTheme } from './theme';
import Home from './pages/Home';
import CreateRequest from './pages/CreateRequest';
import LandingPage from './pages/LandingPage';

const useStyles = makeStyles((theme) => createStyles({
  bar: {
    background: 'linear-gradient(90deg, #ff6969 10%, #c72a2a 90%)',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  darkModeButton: {
    position: 'absolute',
    right: '3%',
  },
  formGroup: {
    position: 'static',
    marginRight: '2%',
  },
})
);

function App() {
  const { darkModeButton, container, formGroup, bar} = useStyles();
  const [email, setEmail] = React.useState('');
  const [theme, setTheme] = React.useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme === 'light' ? LightTheme() : DarkTheme()}>
      <CssBaseline>
        <Box style={{ height: '100%' }}>
          <AppBar position="static">
            <Toolbar>
              <Button display='flex' flexGrow={1} component={Link} to="/" >
                <Typography variant="h5">
                  GRAP
                </Typography>
              </Button>
              <FormControl className={darkModeButton} component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="start"
                    control={<Toggler onChange={themeToggler}/>}
                    label="Switch Theme"
                    labelPlacement="start"
                    />
                </FormGroup>
              </FormControl>
            </Toolbar>
          </AppBar>
          {/* Begin Router */}
          <Box className={container}>
            <Switch>
              <Route exact path="/">
                <Home onChange={setEmail} />
              </Route>
              <Route path="/verification">
                <LandingPage email={email} />
              </Route>
              <Route path="/request">
              <CreateRequest email={email} />
            </Route>
            </Switch>
          </Box>
        </Box>
      </CssBaseline>
    </MuiThemeProvider>
  </BrowserRouter>
  );
}

export default App;
