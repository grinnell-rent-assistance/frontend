import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { Auth } from 'aws-amplify';

Auth.configure({
  region: 'us-east-2',
  userPoolId: 'us-east-2_PaX4JojsS',
  userPoolWebClientId: '72v8te3dd3fkaevg50sn2j1j6d',
});

// window.Auth = Auth;

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
