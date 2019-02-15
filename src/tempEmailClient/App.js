import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EmailView from './components/EmailViewer.js'
import socket from './socket';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state= {   
            clientsideSocket: socket(),
            currentEmail: 'none'
            }
        }
    
  render() {
    return (
      <div>
        <EmailView registerHandler={(handleEmailFunction) => this.state.clientsideSocket.registerNewEmailHandler(handleEmailFunction)}/>
      </div>
    );
  }
}