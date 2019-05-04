import React, { Component } from 'react'
import styled  from 'styled-components'

let Button = styled.button `
	outline: none;
	border: none;
	width: 250px;
	background: #0066CC;
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
