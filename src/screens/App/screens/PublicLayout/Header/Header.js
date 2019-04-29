import React, { Component } from 'react';
import styled from 'styled-components';

let Wrapper = styled.section``
let companyLogo = styled.img``
let navMenu = styled.menu``
let navbarWrapper = styled.section` &:media(min-wdith:1024px) {display: none} `
let navbarItem = styled.div``

export default class Header extends Component {
  render() {
	return (
	  <div>
		<Wrapper>
			<companyLogo></companyLogo>
			<navMenu></navMenu>
			<navbarWrapper>
				<navbarItem></navbarItem>
			</navbarWrapper>
		</Wrapper>
	  </div>
	)
  }
}
