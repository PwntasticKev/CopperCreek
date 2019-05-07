import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../shared/components/Button'

let H1 = styled.h1`
	text-align: center;
	color: black;
`

let H1subtext = styled.h2`
	color: gray;
	text-align: center;
	font-size: 16px;
`

export default class Homepage extends Component {

state = {
	menuOpen : false // This will be global later.
}

  render() {
	return (
	  <div>
	  	<H1>Create and Customize your products</H1>
		<H1subtext>Easy print-on-demand service, offering you the best bang for your buck</H1subtext>
		<div>image from splash here</div>
		<section>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</section>
	  </div>
	)
  }
}


// let Burger = styled.div `

// `

// let CompanyLogo = styled.div `

// `

