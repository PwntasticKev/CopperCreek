import React, { Component } from 'react'
import styled from 'styled-components';
import EmailForm from '../shared/components/EmailForm'
import TypeCards from '../shared/components/TypeCard'

let Wrapper = styled.section`
	padding-top: 70px;
`
export default class Catelog extends Component {
  render() {
	return (
	  <Wrapper>
		{/* will contain a pagenated slider that will show samples and shirts done */}
		{/* email us? */}
		<TypeCards/>
		<EmailForm/>
	  </Wrapper>
	)
  }
}
