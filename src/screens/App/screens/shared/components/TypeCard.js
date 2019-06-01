import React, { Component } from "react"
import styled from "styled-components"
import { BOX_SHADOW } from "../style/styleConstants"
import SweatImg from '../assets/sweats.jpg'
import Jacket from '../assets/jacket.png'
import Hat from '../assets/hats.jpg'
import SweatShirt from '../assets/sweatshirt.png'
import ButtonUp from '../assets/buttonup.jpg'

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
		types: ["Shirts", "Sweats", "Sweatshirts", "Hats", "Button ups"],
		imgLinks: [Jacket,SweatImg, SweatShirt, Hat, ButtonUp]
	}
	render() {
		let { types, imgLinks } = this.state
		var imgLink = imgLinks.map((v,i) => v)
		let cardType = types.map((v, i) => {
			return (
				<CardContainer key={ i }>
					<img src={ imgLink[i] } alt="Img Here" />
					<h4>{ v }</h4>
				</CardContainer>
			)
		})

		return <Wrapper>{ cardType }</Wrapper>
	}
}
