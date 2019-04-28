import React from 'react';
import {
	Link,
	Route,
	Switch,
  } from 'react-router-dom';
  import Homepage from '../views/App/Views/Public/Views/Homepage/Homepage';
  const About = () => <h1>About</h1>;
  
  // We give each route either a target `component`, or we can send functions in `render` or `children` 
  // that return valid nodes. `children` always returns the given node whether there is a match or not.
  
	export default (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/about" component={About} />
			<Route path="/contact" render={() => <h1>Contact Us</h1>} />
			<Route path="/blog" children={({match}) => (
				<li className={match ? 'active' : ''}>
				<Link to="/blog">Blog</Link>
				</li>)} 
			/>
			<Route render={() => <h1>Page not found</h1>} />
		</Switch>
	)
