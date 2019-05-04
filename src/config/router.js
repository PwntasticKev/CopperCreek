import React from 'react';
import {
	Route,
	Switch,
  } from 'react-router-dom';
  import PublicLayout from '../screens/App/screens/PublicLayout/PublicLayout'
  import Homepage from '../screens/App/screens/Homepage/Homepage'
  const About = () => <h1>About</h1>;
  
  // We give each route either a target `component`, or we can send functions in `render` or `children` 
  // that return valid nodes. `children` always returns the given node whether there is a match or not.
  
	export default (
		<Switch>
			<Route exact path="/" component={PublicLayout} />
			<Route path="/about" component={About} />
			<Route path="/homepage" component={Homepage} />
			<Route path="/contact" render={() => <h1>Contact Us</h1>} />
			<Route render={() => <h1>Page not found</h1>} />
		</Switch>
	)
