import React, { Component } from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../../../../config/router';

export default class PublicLayouts extends Component {
  render() {
	return (
	  <div>
		<Header/>
		<Router>
        	{ routes }
      	</Router>
		{/* <App/> */}
		{/* //renders router that handles homepage */}
	  </div>
	)
  }
}
