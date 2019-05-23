import React from 'react'
import styled from 'styled-components'
import Logo from '../../shared/assets/copperCreekConcepts.gif'
import { Link } from '@reach/router'

let Wrapper = styled.section`
	display: flex;
	align-items: center;

`


export default () => {
  return (
	<Wrapper>
	  	<img style={{width: "159px", maxHeight: "60px"}}src={ Logo } alt="logo here"></img>
		<ul style={{display: "flex", alignItems: "center"}}>
			<li>
				<Link to="pricing">Pricing</Link>
			</li>
			<li>
				<Link to="pricing">Categlog</Link>
			</li>
			<li>
				<Link to="pricing">Contact Us</Link>
			</li>
		</ul>
	</Wrapper>
  )
}
