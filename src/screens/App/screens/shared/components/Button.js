import React, { Component } from 'react'
import styled  from 'styled-components'

let Button = styled.button `
	outline: none;
	border: none;
	

`

export default class Button extends Component {
  render() {
	return (
	  <Button>
		{children}
	  </Button>
	)
  }
}
