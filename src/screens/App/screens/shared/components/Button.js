import React, { Component } from 'react'
import styled  from 'styled-components'
import { COLORS, BORDERRADIUS } from '../style/styleConstants'

let Button = styled.button `
	outline: none;
	border: none;
	width: 250px;
	background: ${ COLORS.blue.primary };
	padding: 10px 15px;
	color: white;
	border-radius: ${BORDERRADIUS.button};
`

export default class DefaultButton extends Component {
  render() {
	return (
	  <Button>
		{ this.props.children }
	  </Button>
	)
  }
}
