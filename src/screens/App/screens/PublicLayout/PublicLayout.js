import React, { Component } from 'react';
import Header from './Header/Header';
import { Router } from '@reach/router'
import Homepage from '../Homepage/Homepage'
import Footer from '../PublicLayout/Footer/Footer'

export default class PublicLayouts extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Router>
					<Homepage path="/" primary={false}/>
				</Router>
				<Footer/>
				{/* //renders router that handles homepage */}
	  		</div>
	)
}
}
