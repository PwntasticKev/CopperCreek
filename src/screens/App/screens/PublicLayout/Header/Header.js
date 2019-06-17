import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { COLORS, BOX_SHADOW } from '../../shared/style/styleConstants'

let Wrapper = styled.section` 
	display: flex; 
	justify-content: space-between; 
	padding: 10px 15px;
	align-items: center;
	position: fixed;
    top: 0;
    width: 100%;
    background: white;
	box-shadow: ${ props => props.BOX_SHADOW};
	img {
		width: 95px;
    	max-height: 30px;
	}
	@media (min-width: 1025px) {
		padding: 0 15px;
	}
`

let Logo = styled.div`
	font-weight: 700;
	font-size: 20px;
	color: ${ COLORS.blue.primary };
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
	@media(min-width: 1025px) { 
		display: flex; 

	} `
let NavbarItem = styled.div`
	padding: 10px 10px;
 	border-bottom: 1px solid lightgray;
	 &:hover {
		background: lightgray;
    	opacity: 0.7;
    	border-radius: 5px;
    	transition: background 1s ease-in-out;
	 }
	 @media(min-width: 1025px) {
		 margin: 0 10px;
		 border-bottom: none;
	 }
`

let CloseNavMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 10px;
	@media(min-width: 1025px) {
		display: none;
	}
`

let NavMenuWrapper = styled.section`
	display: ${props => props.display};
	box-shadow: ${ BOX_SHADOW.boxShadow.dark };
	flex-direction: column;
	background: white;
	height: 97vh;
	width: 220px;
	position: absolute;
	top: 0;
	right: -260px;
	transform: translateX(-260px);
	transition: all .5s ease-in-out;
	padding: 15px 5px;
	@media(min-width: 1025px) {
		display: flex;
		height: auto;
		background: #ffff;
		box-shadow: none;
		width: auto;
		position: relative;
		padding: 5px;
	}
`

let XClose = styled.div`
	width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgray;
`

export default class Header extends Component {

	state = {
		menuOpen: false,
		headerScroll: false,
	}

	componentDidMount() {
		window.addEventListener("scroll", this.headerScroll)
	}

	menuToggle(e) {
		this.setState({
			menuOpen: !this.state.menuOpen,
		})
	}

	headerScroll = (e) => {
		window.pageYOffset > 0 ? this.setState({ headerScroll:true }) : this.setState({ headerScroll:false })
	}

  render() {
	  let { headerScroll, menuOpen } = this.state
	return (
		<Wrapper BOX_SHADOW={ headerScroll ? BOX_SHADOW.boxShadow.dark : "white" }>
			{/* <img src={companyLogo} alt="logoimg"/> */}
			<Link to="/">
				<Logo>CopperCreek</Logo>
			</Link>
			<NavMenu onClick={e => this.menuToggle(e)}>
				<div />
				<div />
				<div />
				<span>Menu</span>
			</NavMenu>
			<NavMenuWrapper display={menuOpen ? "flex" : "none"}>
				<CloseNavMenu onClick={e => this.menuToggle(e)}> <XClose>X</XClose> </CloseNavMenu>
				<NavbarWrapper>
					<Link to="/" onClick={_ => this.setState({menuOpen:false})}>
						<NavbarItem>Home</NavbarItem>
					</Link>
					<Link to="pricing" onClick={_ => this.setState({menuOpen:false})}>
						<NavbarItem>Pricing</NavbarItem>
					</Link>
					<Link to="catelog" onClick={_ => this.setState({menuOpen:false})}>
						<NavbarItem>Catelog</NavbarItem>
					</Link>
					<Link to="about" onClick={_ => this.setState({menuOpen:false})}>
						<NavbarItem>About</NavbarItem>
					</Link>
				</NavbarWrapper>
			</NavMenuWrapper>
		</Wrapper>
	)
  }
}
