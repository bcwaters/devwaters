import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EmailContentGrid from './components/EmailContentGrid.js'
import socket from './socket';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state= {   client: socket(),
                        currentEmail: 'none'};
        }
    
  render() {
    return (
      <div>
	       current email is {this.state.currentEmail}
            <EmailContentGrid registerHandler={(handler) => this.state.client.registerHandler(handler)}/>
      </div>
    );
  }
}