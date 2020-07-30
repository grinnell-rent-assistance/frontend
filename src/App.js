import React from 'react';

import { Box, Button, AppBar, Toolbar, Typography, createStyles, makeStyles, MuiThemeProvider} from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import theme from './theme';
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
  const { darkModeButton, container } = useStyles();

  const [email, setEmail] = React.useState('');

  return (
    <MuiThemeProvider theme={theme}>
      <Box style={{ height: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Button component={Link} to="/" >
              <Typography variant="h5">
                GRAP
            </Typography>
            </Button>
            <Button className={darkModeButton} variant="contained">Switch to Dark Mode</Button>
          </Toolbar>
        </AppBar>
        {/* Begin Router */}
        <Box className={container}>
          <Switch>
            <Route exact path="/">
              <Home onChange={setEmail} />
            </Route>
            <Route path="/request">
              <CreateRequest email={email} />
            </Route>
            <Route path="/verification">
              <LandingPage email={email} />
            </Route>
          </Switch>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
