import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.js';
import About from './components/AboutView.js';
import Portfolio from './components/PortfolioView.js';
import Articles from './components/ArticlesView.js';

function Main(){
	return(
<main>
  <Switch>
	<Route exact path='/' component={About} />
    <Route path='/About' component={About} />
    <Route path='/Portfolio' component={Portfolio} />
	<Route path='/Articles' component={Articles} />
  </Switch>
 </main>
)} 
export default ( Main);