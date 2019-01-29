import React, { Component } from 'react'
import Button from './1-atoms/button/Button'
import Modal from './2-molecules/modal/Modal'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}

		// This binding is necessary to make 'this' work in the callback
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
	}

	showModal() {
		this.setState({
			showModal: true
		})
	}

	hideModal() {
		this.setState({
			showModal: false
		})
	}

	render() {
		return (
			<div>
				<h1>React Modal</h1>
				<Modal show={this.state.showModal} handleClose={this.hideModal}>
					<p>Modal</p>
					<p>Data</p>
				</Modal>
				<Button theme="primary" onClick={this.showModal}>
					Open Modal
				</Button>
			</div>
		);
	}
}

export default App