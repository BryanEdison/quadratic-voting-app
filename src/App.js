import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lottery from "./lottery";
import Lister from './list';
import Vote from './vote';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class App extends Component {

  render() {


    return (
      <div id="body">
      <center style={{backgroundColor: "gold"}}>
      <h1 id="title" >QuoVotum</h1>
      <h2>Election #21312</h2>
      <p>
        This contract is managed by Consensys. There are 6 people voting on this referendum.
      </p>
      <hr />
      </center>
      <Route exact path="/" component={Lister}/>
      <Route path="/vote" component={Vote}/>
      </div>

    )
  }

  }
