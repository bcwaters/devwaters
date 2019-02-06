import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './Components/ButtonAppBar.js'
import GutterGrid from './Components/GuttersGrid.js'

const title = 'My ael Setup';
const website = (
	<div>
		<AppBar/> 
		<GutterGrid />
	</div>

)

ReactDOM.render(
	website,
	document.getElementById('app')
);

module.hot.accept();