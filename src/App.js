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
import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';



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
