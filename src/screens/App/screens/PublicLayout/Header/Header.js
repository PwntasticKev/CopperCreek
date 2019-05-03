import React, { Component } from 'react';
import styled from 'styled-components';
import companyLogo from '../../shared/assets/copperCreekConcepts.gif'

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
`

let NavMenu = styled.div`
	text-align: center;
 div { 
	margin: 3px 0; 
	background: gray; 
	height: 3px; 
	width: 25px; 
	display: flex; 
	justify-content: space-between; 
	flex-direction: column; 
}
span {
	font-size: 9px;
	color: gray;
	text-align: center;
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
  render() {
	return (
	  <div>
		<Wrapper>
			{/* <img src={companyLogo} alt="logoimg"/> */}
			<Logo>CopperCreek</Logo>
			<NavMenu>
				<div></div>
				<div></div>
				<div></div>
				<span>Menu</span>
			</NavMenu>
			<NavbarWrapper>
				<NavbarItem>Pricing</NavbarItem>
				<NavbarItem>Catelog</NavbarItem>
				<NavbarItem>About</NavbarItem>
			</NavbarWrapper>
		</Wrapper>
	  </div>
	)
  }
}
