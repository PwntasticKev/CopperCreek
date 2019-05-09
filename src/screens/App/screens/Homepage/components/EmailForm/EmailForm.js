import React, { Component } from 'react'

export default class componentName extends Component {

	state = {
		name: ''
	}

 handleChange = (e) => {
	let { name, value } = e.target
		this.setState(
		  {
			[name]: value
		  },
		  _ => console.log(this.state)
		)
	}

  render() {
	return (
	  <form>
		  <section>
				<label name="name">Name:</label>
				<input type="text" onChange={this.handleChange}/>
		  </section>
	  </form>
	)
  }
}
