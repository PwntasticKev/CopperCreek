import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../../shared/components/Button'
import { BUTTONS } from '../../../shared/style/styleConstants';

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
		}
	}
`

export default class componentName extends Component {

	state = {
		name: '',
		email: '',
		phone: ''
	}

	handleChange = e => {
		let { name, value } = e.target
		this.setState({
			[name]: value
		}, () => console.log(this.state))
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
		  <h1>
			Lets Get in Touch!
		  </h1>
				<section>
					<input name="name" type="text" placeholder="Name" onChange={this.handleChange}/>
					<input name="email" type="text" placeholder="Email" onChange={this.handleChange}/>
					<input name="phone" type="text" placeholder="Phone" onChange={this.handleChange}/>
				</section>
		  	<Button style={ BUTTONS.primary }>
				<div onClick={() => this.submitEmail( { ...this.state } ) }>Submit</div>
			</Button>

		</FormWrapper>
	)
  }
}
