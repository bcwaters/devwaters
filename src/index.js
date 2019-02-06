import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './Components/TopAppBar.js'
import BottomAppBar from './Components/BottomAppBar.js'
import MainContentGrid from './Components/MainContentGrid.js'

const title = 'My ael Setup';
const website = (
	<div>
		<AppBar/> 
		<MainContentGrid />
		<BottomAppBar />
	</div>

)

ReactDOM.render(
	website,
	document.getElementById('app')
);

module.hot.accept();