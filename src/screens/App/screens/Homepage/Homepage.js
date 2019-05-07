import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../shared/components/Button'
import { Link } from '@reach/router'

let H1 = styled.h1`
	text-align: center;
	color: black;
`

let H1subtext = styled.h2`
	color: gray;
	text-align: center;
	font-size: 16px;
`

let ButtonWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

export default class Homepage extends Component {

state = {
	menuOpen : false,
}

  render() {
	return (
	  <div>
	  	<H1>Create and Customize your products</H1>
		<H1subtext>Easy print-on-demand service, offering you the best bang for your buck</H1subtext>
		<div>image from splash here</div>
		<ButtonWrapper>
			<Link to="/catelog">
				<Button>Check out our Catelog</Button>
			</Link>
			<Link to="/catelog">
				<Button>Pricing</Button>
			</Link>
		</ButtonWrapper>
	  </div>
	)
  }
}

