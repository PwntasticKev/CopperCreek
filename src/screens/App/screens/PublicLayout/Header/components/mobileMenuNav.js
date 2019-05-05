import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'


let Wrapper = styled.section`
	background: lightgray;
	height: 100vh;
	width: 220px;
	position: absolute;
	top: 0;
	right: 0;
	@media(min-width: 1025px) {
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


export default class MobileNav extends Component {
  render() {
	return (
	  <Wrapper>
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
	)
  }
}
