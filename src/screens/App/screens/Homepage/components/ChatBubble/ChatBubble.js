import React, {Component} from 'react';
import Title from './components/Title'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendForm'
import styled from 'styled-components'


		const DUMMY_DATA = [
			{
			  senderId: "perborgen",
			  text: "who'll win?"
			},
			{
			  senderId: "janedoe",
			  text: "who'll win?"
			}
		  ]

		  let Wrapper = styled.section``

    class ChatApp extends Component {

		state = {
			messages: DUMMY_DATA
		}
        render() {
            return (
				<Wrapper>
					<Title />
					<MessageList messages={this.state.messages}/>
					<SendMessageForm />
				</Wrapper>
            )
        }
    }

    export default ChatApp;