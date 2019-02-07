import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.js';
import About from './components/AboutView.js';
import Projects from './components/ProjectsView.js';
import Articles from './components/ArticlesView.js';

function Main(){
	return(
<main>
  <Switch>
	<Route exact path='/' component={About} />
    <Route path='/About' component={About} />
    <Route path='/Projects' component={Projects} />
	<Route path='/Articles' component={Articles} />
  </Switch>
 </main>
)} 
export default ( Main

);