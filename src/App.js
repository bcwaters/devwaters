import React, { Component } from "react";
import Routes from './routes';
import AppBar from './components/TopAppBar.js'
import BottomAppBar from './components/BottomAppBar.js'

export default class App extends Component {
  render() {
    return (
      <div>
		<AppBar/> 
		<Routes/>
		<BottomAppBar />
      </div>
    );
  }
}