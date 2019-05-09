import React, { Component } from 'react'
import styled  from 'styled-components'
import { COLORS, BORDERRADIUS, BOX_SHADOW } from '../style/styleConstants'

let Button = styled.button `
	outline: none;
	border: none;
	width: 100%;
	background: ${ props => props.theme};
	padding: 10px 40px;
	color: white;
	border-radius: ${ BORDERRADIUS.button };
	box-shadow: ${ BOX_SHADOW };
	/* background: linear-gradient(to top right, ${ COLORS.blue.primary } 0%, ${ COLORS.blue.primary } 35%, ${ COLORS.blue.secondary } 100%); */
`
export default class DefaultButton extends Component {

	componentDidMount() {
		console.log('props',this.props)
	}

  render() {
	return (
	  <Button theme={ this.props.style  }>
		{ this.props.children }
	  </Button>
	)
  }
}
