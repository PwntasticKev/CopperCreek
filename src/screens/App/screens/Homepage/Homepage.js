import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../shared/components/Button'
import { Link } from '@reach/router'
import { BUTTONS } from '../shared/style/styleConstants';
import { Router } from '@reach/router'
import Catelog from '../Catelog/Categlog'
import EmailForm from '../shared/components/EmailForm'
import TypeCard from '../shared/components/TypeCard'
const Splash = 'https://duw6wk4ou1qt.cloudfront.net/static/v700/images/homepage/printful-products.png'

let Wrapper = styled.section`
	padding-top: 70px;
	@media (min-width: 1025px) {
		padding-top: 85px;
	}
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
	text-align: center;
	@media(min-width: 1025px) {
		flex-direction: row !important;
		a {
			margin: 0 5px;
		}
	}
`

let SplashImg = styled.img`
	height: auto;
	max-height: 350px;
	margin: 0 auto;
	@media(min-width: 1025px) { 
		max-width: 400px;
	}
	/* background: url(${ Splash }) no-repeat;
	background-size: contain; */
`
let SplashEmailWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media(min-width: 1025px) {
		flex-direction: row;
	}
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
		<SplashEmailWrapper style={{display: "flex", justifyContent: "center"}}>
			{/* <section > */}
				<SplashImg src={ Splash }></SplashImg>
				<ButtonWrapper>
					<Link to="/catelog">
						<Button style={ BUTTONS.primary }>Check out our Catelog</Button>
					</Link>
					<Link to="/order">
						<Button style={ BUTTONS.secondary }>Order</Button>
						<div style={{ fontSize: "13px", fontStyle: "italic" }}>Min order of 30</div>
					</Link>
				</ButtonWrapper>
			{/* </section> */}
			<section>
				<H1>Custom Clothing made for you</H1>
				<TypeCard/>
			</section>
			<EmailForm/>
		</SplashEmailWrapper>
		<Router>
			<Catelog path="/catelog"/>
		</Router>
	  </Wrapper>
	)
  }
}

