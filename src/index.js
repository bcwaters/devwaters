import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'

//TODO need to set up custom express routes ... possible us nextjs
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);

module.hot.accept();