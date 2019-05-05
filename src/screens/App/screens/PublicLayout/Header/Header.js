import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router'
// import companyLogo from '../../shared/assets/copperCreekConcepts.gif'

let Wrapper = styled.section` 
	display: flex; 
	justify-content: space-between; 
	padding: 10px 15px;
	align-items: center;

	img {
		width: 95px;
    	max-height: 30px;
	}
`

let Logo = styled.div`
	font-weight: 700;
	font-size: 20px;
	color: #0066CC;
`

let NavMenu = styled.div`
	text-align: center;
	align-items: center;
    display: flex;
    flex-direction: column;
 div { 
	margin: 2px 0; 
	background: gray; 
	height: 3px; 
	width: 21px; 
	display: flex; 
	justify-content: space-between; 
	flex-direction: column; 
}
span {
	font-size: 11px;
	color: gray;
	text-align: center;
	@media(min-width: 1025px) {
		display: none;
	}
}

@media( min-width: 1025px) {
	display: none;
}
`
let NavbarWrapper = styled.section` 
	display: none; 
	@media(min-width: 1025px) { 
		display: flex; 

	} `
let NavbarItem = styled.div`
	margin: 0 10px;
`

export default class Header extends Component {

	state = {
		menuOpen: false
	}

	menuToggle(e) {
		this.setState({
			menuOpen: !this.state.menuOpen,
		},_ => console.log(this.state))
	}
  render() {
	return (
	  <div>
		<Wrapper>
			{/* <img src={companyLogo} alt="logoimg"/> */}
			<Link to="/">
				<Logo>CopperCreek</Logo>
			</Link>
			<NavMenu onClick={e => this.menuToggle(e)}>
				<div></div>
				<div></div>
				<div></div>
				<span>Menu</span>
			</NavMenu>
			<NavbarWrapper>
				<Link to="pricing">
					<NavbarItem>Pricing</NavbarItem>
				</Link>
				<Link to="catelog">
					<NavbarItem>Catelog</NavbarItem>
				</Link>
				<Link to="about">
					<NavbarItem>About</NavbarItem>
				</Link>
			</NavbarWrapper>
		</Wrapper>
	  </div>
	)
  }
}
