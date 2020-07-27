import React from 'react';

import { Box, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';


function App() {
  return (
    <Box style={{ height: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Typography variant="h5">
              GRAP
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {/* Begin Router */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
