import React from 'react'
import styled from 'styled-components'
import Logo from '../../shared/assets/copperCreekConcepts.gif'
import { Link } from '@reach/router'

let Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 10px;

`

let FooterOptions = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 2px;
`


export default () => {
  return (
	<div>
		<Wrapper>
			<img style={{width: "130px", maxHeight: "60px"}} src={ Logo } alt="logo"></img>
			<FooterOptions>
				<li>
					<Link to="pricing">Pricing</Link>
				</li>
				<li>
					<Link to="pricing">Categlog</Link>
				</li>
				<li>
					<Link to="pricing">Contact Us</Link>
				</li>
			</FooterOptions>
		</Wrapper>
		{/* eslint-disable-next-line */}
		<div style={{paddingLeft: "5px"}}>©️️ CopperCreek LLC</div>
	</div>
  )
}
