import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EmailContentGrid from './components/EmailViewer.js'
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
            <EmailContentGrid registerHandler={(handler) => this.state.client.registerHandler(handler)}/>
      </div>
    );
  }
}