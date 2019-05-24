import React, { Component } from 'react';
import Header from './Header/Header';
import { Router } from '@reach/router'
import Homepage from '../Homepage/Homepage'
import Footer from '../PublicLayout/Footer/Footer'
import Catelog from '../Catelog/Categlog'

export default class PublicLayouts extends Component {
	render() {
		return (
			<div>
				<Header/>
					<Router>
						<Homepage path="/" primary={false}/>
						<Catelog path="/catelog"/>
					</Router>
				<Footer/>
				{/* //renders router that handles homepage */}
	  		</div>
	)
}
}
