import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../shared/components/Button'
import { Link } from '@reach/router'
import { BUTTONS } from '../shared/style/styleConstants';
import Splash from '../shared/assets/somedude.jpeg'

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

let SplashImg = styled.div`
	height: 260px;
	width: 100%;
	background: url(${Splash}) no-repeat;
	background-size: cover;
    background-position: bottom;
`


export default class Homepage extends Component {

state = {
	menuOpen : false,
}

  render() {
	return (
	  <div style={{overflow: "scroll"}}>
	  	<H1>Create and Customize your products</H1>
		<H1subtext>Easy print-on-demand service, offering you the best bang for your buck</H1subtext>
		<SplashImg src={ Splash }>image from splash here</SplashImg>
		<ButtonWrapper>
			<Link to="/catelog">
				<Button style={ BUTTONS.primary }>Check out our Catelog</Button>
			</Link>
			<Link to="/catelog">
				<Button style={ BUTTONS.secondary }>Pricing</Button>
			</Link>
			<div>4</div>
			<div>4</div>
			<div>4</div>
			<div>4</div>
			<div>4</div>
			<div>4</div>
			<div>4</div>
			<div>4	4	</div>
		</ButtonWrapper>
	  </div>
	)
  }
}

