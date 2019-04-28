import React, { Component } from 'react'
import styled from 'styled-components'

export default class Homepage extends Component {

state = {
	menuOpen : false // This will be global later.
}

  render() {
	return (
	  <div>
		<div>
			<CompanyLogo>Logo</CompanyLogo>
			<Burger>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
		</div>
	  </div>
	)
  }
}


let Burger = styled.div `

`

let CompanyLogo = styled.div `

`

