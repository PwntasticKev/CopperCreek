import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../../../shared/components/Button'
import { BUTTONS } from '../../../shared/style/styleConstants';


let FormWrapper = styled.section`
	background: darkgray;
	width: 100%;
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

	submitEmail() {
		console.log('get hit')
		// function to send out email
		// console.log(state)
	}

  render() {
	return (
	  	<FormWrapper>
			<section>
				<label>Name:</label>
				<input name="name" type="text" placeholder="Name" onChange={this.handleChange}/>
			</section>
			<section>
				<label>email:</label>
				<input name="email" type="text" placeholder="Email" onChange={this.handleChange}/>
			</section>
			<section>
				<label>phone:</label>
				<input name="phone" type="text" placeholder="Phone" onChange={this.handleChange}/>
			</section>
		  	<Button style={ BUTTONS.primary }>
				<div onClick={() => this.submitEmail( { ...this.state } ) }>Submit</div>
			</Button>

		</FormWrapper>
	)
  }
}
