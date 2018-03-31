import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lottery from "./lottery";
import Vote from './vote';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



  export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to QV Voting Platform!</h1>
        <div>
        <ul>
          <li><Link to="/election">Election on whether dogs or cats are best!</Link></li>

        </ul>

        <hr/>

        <Route exact path="/election" component={Vote}/>

      </div>
      </div>
    );
  }

  }
