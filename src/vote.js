import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from "./web3";
import lottery from "./lottery";
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FloatingActionButton from 'material-ui/FloatingActionButton';


import TextField from 'material-ui/TextField';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Connect } from 'uport-connect'

const uport = new Connect('Peace Accelerators');


const connectUPort = () => {
  uport.requestCredentials().then((credentials) => {
    console.log(credentials)
  })
};





const style = {
  margin: 12,
};


  export default class Vote extends Component {
    state = {
      manager: "",
      players: "",
      balance: "",
      value: "",
      message: ""
    }

    async componentDidMount() {

      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getVoters().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      this.setState({ manager, players, balance });
    }

    enterLottery = async event => {
      // prevents normal form submission
      event.preventDefault();

      const accounts = await web3.eth.getAccounts();

      // put this in a bit later
      this.setState({ message: "Waiting on transaction success..." });

      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });

      // put this in a bit later
      this.setState({ message: "You have been entered!" });
    };

    pickWinner = async event => {
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: "Waiting on transaction success..." });

      console.log(
        await lottery.methods.pickWinner().send({
          from: accounts[0]
        })
      );

      this.setState({ message: "Winner has been picked!" });
    };



  render() {
    console.log(this.state.value)
    return (
      <div>


      <center>
      <form className="center" onSubmit={this.enterLottery}>
        <h4>Voice your opinion!</h4>

        <div>
          <FloatingActionButton backgroundColor="green" style={{margin: 20}}>
            ✔
          </FloatingActionButton>
          <FloatingActionButton backgroundColor="red" style={{margin: 20}}>
              X
          </FloatingActionButton>
          </div>
        <div>
        <br/><br/>
          <label># of Votes Wanted</label> <br/>

          <TextField
          value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          hintText="Please enter an ether value"

        />


        </div>
        <button><RaisedButton label="Enter" primary={true} style={style} /></button>
        </form>
</center>

    <List>
      <Subheader>Recent votes</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="http://lorempixel.com/400/200" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <hr />
        <center>
        <RaisedButton onClick={this.pickWinner} label="Close Election" backgroundColor="red"/>
        <h1>{this.state.message}</h1>
        </center>
      </div>
    );
  }

  }
