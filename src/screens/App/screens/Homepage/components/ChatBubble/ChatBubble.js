import React, {Component} from 'react';
import Title from './components/Title'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendForm'


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

    class ChatApp extends Component {

		state = {
			messages: DUMMY_DATA
		}
        render() {
            return (
				<React.fragment>
					<Title />
					<MessageList messages={this.state.messages}/>
					<SendMessageForm />
				</React.fragment>
            )
        }
    }

    export default ChatApp;