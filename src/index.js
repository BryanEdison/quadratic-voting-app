import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
  <MuiThemeProvider>
  <App />
  </MuiThemeProvider>
  </Router>
  ,
  document.getElementById('root'));
registerServiceWorker();
