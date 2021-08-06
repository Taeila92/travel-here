import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'App';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from 'auth_service';
import firebase from 'firebase';

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
