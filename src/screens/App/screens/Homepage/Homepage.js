import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../shared/components/Button'
import { Link } from '@reach/router'
import { BUTTONS } from '../shared/style/styleConstants';
import { Router } from '@reach/router'
import Catelog from '../Catelog/Categlog'
import EmailForm from '../shared/components/EmailForm'
const Splash = 'https://duw6wk4ou1qt.cloudfront.net/static/v700/images/homepage/printful-products.png'

let Wrapper = styled.section`
	padding-top: 70px;
`

let H1 = styled.h1`
	text-align: center;
	color: black;
`

let H1subtext = styled.h2`
	color: gray;
	text-align: center;
	font-size: 20px;
    padding: 0 35px;
`

let ButtonWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

let SplashImg = styled.div`
	height: 400px;
	width: 100%;
	background: url(${ Splash }) no-repeat;
	background-size: contain;
`


export default class Homepage extends Component {

state = {
	menuOpen : false,
}

  render() {
	return (
	  <Wrapper>
	  	<H1>Create and Customize your products</H1>
		<H1subtext>Easy print-on-demand service, offering you the best bang for your buck</H1subtext>
		<SplashImg src={ Splash }></SplashImg>
		<ButtonWrapper>
			<Link to="/catelog">
				<Button style={ BUTTONS.primary }>Check out our Catelog</Button>
			</Link>
			<Link to="/pricing">
				<Button onChange={_ => console.log("whythe F")} style={ BUTTONS.secondary }>Pricing</Button>
			</Link>
		</ButtonWrapper>
		<EmailForm/>
		<Router>
			<Catelog path="/catelog"/>
		</Router>
	  </Wrapper>
	)
  }
}

