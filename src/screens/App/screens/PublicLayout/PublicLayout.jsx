import React, { Component } from 'react';
import Header from './Header/Header';
import App from '../../App'

export default class PublicLayouts extends Component {
  render() {
	return (
	  <div>
	  <Header/>
		{/* <App/> */}
		{/* //renders router that handles homepage */}
	  </div>
	)
  }
}
