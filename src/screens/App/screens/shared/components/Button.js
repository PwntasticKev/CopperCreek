import React, { Component } from 'react'
import styled  from 'styled-components'
import { COLOR } from '../style/styleConstants'

let Button = styled.button `
	outline: none;
	border: none;
	width: 250px;
	background: ${ COLOR.blue.primary };
	padding: 10px 15px;
	color: white;
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
