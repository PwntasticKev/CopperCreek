import React, { Component } from "react"
import styled from "styled-components"
import { BOX_SHADOW } from "../../shared/style/styleConstants"

let Wrapper = styled.section`
	padding: 0 5px;
`

let CardContainer = styled.section`
	border: 1px solid black;
	align-items: center;
	box-shadow: ${props => BOX_SHADOW.dark};
	padding: 5px;
	margin: 5px 0;
`
export default class ItemCard extends Component {
	state = {
		types: ["shirt", "sweats", "sweatshirt", "hats", "buttonups"],
		imgLinks: ["1", "2", "3", "4", "5", "6"]
	}
	render() {
		let { types, imgLinks } = this.state

		let imgLink = imgLinks.map(v => v)

		let cardType = types.map((v, i) => {
			return (
				<CardContainer id={ i }>
					<img src={ imgLink } alt="Img Here" />
					<h4>{ v }</h4>
				</CardContainer>
			)
		})

		return <Wrapper>{ cardType }</Wrapper>
	}
}
