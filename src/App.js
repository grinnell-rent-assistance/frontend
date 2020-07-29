import React from 'react';

import { Box, Button, AppBar, Toolbar, Typography, createStyles, makeStyles } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import CreateRequest from './pages/CreateRequest';

const useStyles = makeStyles((theme) => createStyles({
  container: {
    marginTop: theme.spacing(2),
  }
})
);

function App() {
  const { container } = useStyles();

  const [email, setEmail] = React.useState('');

  return (
    <Box style={{ height: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" >
            <Typography variant="h5">
              GRAP
            </Typography>
          </Button>
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
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
