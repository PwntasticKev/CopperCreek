import React, { Component } from 'react';
import styled from 'styled-components';
import companyLogo from '../../shared/assets/copperCreekConcepts.gif'

let Wrapper = styled.section` 
	display: flex; 
	justify-content: space-between; 
	padding: 10px 15px;

	img {
		width: 95px;
    	max-height: 30px;
	}
`
let CompanyLogo = styled.div`
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
`
let NavbarWrapper = styled.section` display: none; @media(min-width: 1024px) { display: none } `
let NavbarItem = styled.div``

export default class Header extends Component {
  render() {
	return (
	  <div>
		<Wrapper>
			<img src={companyLogo} alt="logoimg"/>
			<NavMenu>
				<div></div>
				<div></div>
				<div></div>
				<span>Menu</span>
			</NavMenu>
			<NavbarWrapper class='navwrap'>
				<NavbarItem></NavbarItem>
			</NavbarWrapper>
		</Wrapper>
	  </div>
	)
  }
}
