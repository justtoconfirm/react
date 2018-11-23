import React, { Component } from 'react'

import ModalComponent from '../modal/ModalComponent';

// Same as: class TestComponent extends React.Component
// This is an ES6 class component
class TestComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			condition: false,
			modalOpen: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			condition: !this.state.condition
		})
	}

	toggleModal() {
		this.setState({
			isOpen: !this.state.modalOpen
		})
	}

	render() {
		return (
			<div>
				<button onClick={ this.toggleModal }>Open the modal</button>
				<button className={ this.state.condition ? "button toggled" : "button" } onClick={ this.handleClick }>Click Me</button>
			</div>
		)
	}
}

export default TestComponent