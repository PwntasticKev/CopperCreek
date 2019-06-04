import React, { Component } from "react"
import styled from "styled-components"
import { Link, Router } from '@reach/router'
import { BOX_SHADOW } from "../style/styleConstants"
import SweatImg from '../assets/sweats.jpg'
import Jacket from '../assets/jacket.png'
import Hat from '../assets/hats.jpg'
// import SweatShirt from '../assets/sweatshirt.png'
import ButtonUp from '../assets/buttonup.jpg'
import Shirt from '../assets/somedude.jpeg'

let Wrapper = styled.section`
	padding: 0 5px;
`

let CardContainer = styled.section`
	display: flex;
	flex-direction: row;
	border: 1px solid lightgray;
	box-shadow: ${props => BOX_SHADOW.light};
	padding: 5px;
	margin: 5px 0;

	img {
		max-height: 100px;
	}
`
export default class ItemCard extends Component {
	state = {
		types: ["Shirts", "Sweats", "Sweatshirts", "Hats", "Button ups"],
		imgLinks: [Shirt, SweatImg, Jacket, Hat, ButtonUp],
		descriptions: ["Fine quality shirts!","Stylish Sweats", "Sweatshirts Description","Cool chill Hats","Button ups Description",""]
	}
	render() {
		let { types, imgLinks, descriptions } = this.state
		let imgLink = imgLinks.map((v,i) => v)
		let description = descriptions.map((v,i) => v)
		let cardType = types.map((v, i) => {
			return (
				<Link key={i } to="/product/:id">
					<CardContainer key={i}>
						<img src={ imgLink[i] } alt="Img Here" />
						<section style={{display: "flex", flexDirection: "column"}}>
							<h4>{ v }</h4>
							<div>{description[i]}</div>
						</section>
					</CardContainer>
				</Link>
			)
		})

		return ( <Wrapper>{ cardType }</Wrapper> )
	}
}
