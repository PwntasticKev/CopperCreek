import React, { Component } from 'react';
import styled from 'styled-components';

let Name = styled.input``
let Email = styled.input``
let Address = styled.input``
let CommentField = styled.input``

export default class EmailForm extends Component {
  render() {
	return (
	  <React.fragment>
	  	<Name></Name>
		<Email></Email>
		<Address></Address>
		<CommentField></CommentField>
	  	{/* Email Form */}
		{/* separate components? */}
	  </React.fragment>
	)
  }
}
