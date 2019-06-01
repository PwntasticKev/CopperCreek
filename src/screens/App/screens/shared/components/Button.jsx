import React, { Component } from 'react'
import styled  from 'styled-components'
import { COLORS, BORDER_RADIUS, BOX_SHADOW } from '../style/styleConstants'

let Button = styled.button `
	outline: none;
	border: none;
	width: 100%;
	background: ${ props => props.theme};
	padding: 10px 40px;
	color: white;
	min-width: 245px;
	border-radius: ${ BORDER_RADIUS.button };
	box-shadow: ${ BOX_SHADOW };
	transition: all .5s ease-in-out;
	/* background: linear-gradient(to top right, ${ COLORS.blue.primary } 0%, ${ COLORS.blue.primary } 35%, ${ COLORS.blue.secondary } 100%); */
	&:hover {
		box-shadow: inset 0 0 0 5px #E6AD00;
	}
`
export default class DefaultButton extends Component {

	componentDidMount() {
	}

  render() {
	return (
	  <Button theme={ this.props.style  }>
			{ this.props.children }
	  </Button>
	)
  }
}
