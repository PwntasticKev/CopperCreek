import React, { Component } from 'react';
import styled from 'styled-components';

let Wrapper = styled.section` display: flex; justify-content: space-between; `
let companyLogo = styled.img``
let navMenu = styled.menu` div { height: 2px; display: flex; justify-content: space-between; flex-direction: column; }`
let navbarWrapper = styled.section` &:media(min-wdith:1024px) {display: none} `
let navbarItem = styled.div``

export default class Header extends Component {
  render() {
	return (
	  <div>
		<Wrapper>
			<companyLogo>loogo</companyLogo>
			<navMenu>
				<div></div>
				<div></div>
				<div></div>
			</navMenu>
			<navbarWrapper>
				<navbarItem></navbarItem>
			</navbarWrapper>
		</Wrapper>
	  </div>
	)
  }
}
