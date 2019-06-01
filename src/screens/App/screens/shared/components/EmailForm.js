import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { BUTTONS, BORDER_RADIUS } from '../style/styleConstants';

// user should be able to select a type (shirt/cotton for example) and in the email it should know through the url what kind of product?

let FormWrapper = styled.section`
	background: #3D3732;
	width: 100%;
	padding: 30px 45px;
	section {
		display: flex;
		align-items : center;
		flex-direction: column;
		margin-bottom: 10px;
		@media ( min-width: 1025px) {
			margin: 0;
		}
		label {
			margin-right: 5px;
			color: white;
			margin: 7px 0;
		}
		input, textarea {
			width: 100%;
		    border: none;
    		padding: 4px;
    		padding-left: 20px;
			margin: 2px 0;
			border-radius: ${ BORDER_RADIUS.input };
			@media(min-width: 1025px) {
				padding: 10px;
			}
		}
		div input {
			&:nth-child(2) {
				margin-left: 3px;
			}
		}
	}
`

let InputWrapper = styled.section`
	display: flex;
	flex-direction: row !important;
	@media ( min-width: 1025px) {
		flex-direction: column;
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
				<section>
				<InputWrapper>
					<input name="name" type="text" placeholder="Name" onChange={this.handleChange} required={true}/>
					<input name="phone" type="text" placeholder="Phone" onChange={this.handleChange}/>
				</InputWrapper>
					<input name="email" type="text" placeholder="Email" onChange={this.handleChange} required={true}/>
					<textarea name="text" type="text" placeholder="Type here..." onChange={this.handleChange} cols="3" rows="3"></textarea>
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
