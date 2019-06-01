import React, { Component } from 'react'

export default class ItemCard extends Component {
	state = {
		types: ["shirt", "sweats", "sweatshirt", "hats", "buttonups"],

	}
  render() {
	let types = this.state.types.map((v,i) => {
		return (<div id={v.i}> {v} </div>)
	})

	return (
	  <div>
		{{ types }}
	  </div>
	)
  }
}
