import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'

//TODO need to set up custom express routes ... possible us nextjs
//TODO add readme for github and a TODO doc
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);

module.hot.accept();