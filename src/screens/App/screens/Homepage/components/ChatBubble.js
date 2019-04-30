import React, { Component } from 'react'
import ChatBubble from 'react-chat-bubble';
 
class ChatHelp extends Component {

	state = {
		messages: []
	}
	
	componentDidMount() {
		this.setState({
			messages: [{
				"type" : 0,
				"image": "cat.jpg",
				"text": "Hello! Good Morning!"
			}, {
				"type": 1,
				"image": "dog.jpg",
				"text": "Hello! Good Afternoon!"
			}]
		})
	}

	trackMessages (e) {
		this.setState({
			messages: [...this.state.messages, e.target.value]
		})
	}
	render() {
		  
      return (
	 	 <ChatBubble messages = {this.state.messages} onChange={e => this.trackMessages(e)} />
	  )
	}
}
export default ChatHelp;