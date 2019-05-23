import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../../shared/components/Button'
import { BUTTONS, BORDER_RADIUS } from '../../../shared/style/styleConstants';

let FormWrapper = styled.section`
	background: #3D3732;
	width: 100%;
	padding: 30px 10px;
	section {
		display: flex;
		align-items : center;
		flex-direction: column;
		label {
			margin-right: 5px;
			color: white;
			margin: 7px 0;
		}
		input {
			width: 100%;
		    border: none;
    		padding: 4px;
    		padding-left: 20px;
			margin: 3px 0 3px 5px;
			border-radius: ${ BORDER_RADIUS }
		}
	}
`

export default class EmailForm extends Component {

	state = {
		name: '',
		email: '',
		phone: '',
		text: '',
		sendingEmail: false
	}

	handleChange = e => {
		let { name, value } = e.target
		this.setState({
			[name]: value
		}, _ => console.log(this.state))
	}

	submitEmail(state) {
		console.log('get hit')
		console.log(state)
		// function to send out email
		// console.log(state)
	}

  render() {
	return (
	  	<FormWrapper>
		  <h1 style={{textAlign: "center", color: "white"}}>
			Lets Get in Touch!
		  </h1>
				<section style={{padding: "0 45px"}}>
				<div style={{display: "flex", alignItems: "center"}}>
					<input name="name" type="text" placeholder="Name" onChange={this.handleChange} required={true}/>
					<input name="phone" type="text" placeholder="Phone" onChange={this.handleChange}/>
				</div>
					<input name="email" type="text" placeholder="Email" onChange={this.handleChange} required={true}/>
					<input name="text" type="text" placeholder="Type here..." onChange={this.handleChange} columns="3" rows="3"/>
				</section>
		  	<Button style={ BUTTONS.primary }>
				<div onClick={() => this.submitEmail( { ...this.state } ) }> 
					{ !this.state.sendingEmail ? "Submit Email" : "Processing" } 
				</div>
			</Button>

			{/* on click change word to processing or sending email. add an icon to go until its been sent. 
			after send disable the buttno and or cover the email with an ovrlay */}

		</FormWrapper>
	)
  }
}
