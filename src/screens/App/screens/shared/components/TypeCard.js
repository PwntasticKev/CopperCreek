import React, { Component } from "react"
import styled from "styled-components"
import Product from './Product'
import { Link, Router } from '@reach/router'
import { BOX_SHADOW } from "../style/styleConstants"
import SweatsImg from '../assets/sweats.jpg'
import Jacket from '../assets/jacket.png'
import Hat from '../assets/hats.jpg'
import ButtonUp from '../assets/buttonup.jpg'
import Shirt from '../assets/buttonup.jpg'

let Wrapper = styled.section`
	padding: 0 5px;
	@media(min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media(min-width: 1025px) {
		/* grid-template-columns: 1fr 1fr 1fr 1fr; */
		a {
			display: grid;
			text-align: center;
    		justify-content: center;
		}
	}
`

let CardContainer = styled.section`
	display: flex;
	flex-direction: row;
	border: 1px solid lightgray;
	box-shadow: ${props => BOX_SHADOW.light};
	margin: 5px;
	@media(min-width: 1025px ) {
		flex-direction: column;
		width: 275px;
	}

	img {
		max-height: 100px;
		@media(min-width: 1025px) {
			max-height: 170px;
		}
	}
`
export default class ItemCard extends Component {
	state = {
		types: ["Shirts", "Sweats", "Sweatshirts", "Hats", "Button ups"],
		imgLinks: [Shirt, SweatsImg, Jacket, Hat, ButtonUp],
		descriptions: ["Fine quality shirts!","Stylish Sweats", "Sweatshirts Description","Cool chill Hats","Button ups Description",""]
	}
	render() {
		let { types, imgLinks, descriptions } = this.state
		let imgLink = imgLinks.map((v,i) => v)
		let description = descriptions.map((v,i) => v)
		let cardType = types.map((v, i) => {
			return (
				<Link key={i} to={`/product/:${i}`}>
					<CardContainer>
						<img src={ imgLink[i] } alt="Img Here" />
						<section style={{display: "flex", flexDirection: "column", padding: "0 10px"}}>
							<h4>{ v }</h4>
							<div>{description[i]}</div>
						</section>
					</CardContainer>
					<Router>
						<Product path="/product/:id"/>
					</Router>
				</Link>
			)
		})

		return ( <Wrapper>{ cardType }</Wrapper> )
	}
}
