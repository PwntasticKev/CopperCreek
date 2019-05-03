import React, { Component } from 'react'
import styled from 'styled-components'
import ChatBubble from './components/ChatBubble/ChatBubble'

export default class Homepage extends Component {

state = {
	menuOpen : false // This will be global later.
}

  render() {
	return (
	  <div>
	  	<h1>Create and Customize your designs</h1>
			<ChatBubble/>
	  </div>
	)
  }
}


let Burger = styled.div `

`

let CompanyLogo = styled.div `

`

