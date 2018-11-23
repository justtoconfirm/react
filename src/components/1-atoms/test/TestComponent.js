import React, { Component } from 'react'

// Same as: class TestComponent extends React.Component
// This is an ES6 class component
class TestComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			condition: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			condition: !this.state.condition
		})
	}

	render() {
		return (
			<button className={ this.state.condition ? "button toggled" : "button" } onClick={ this.handleClick }>Click Me</button>
		)
	}
}

export default TestComponent