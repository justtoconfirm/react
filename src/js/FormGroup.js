import React, {Component} from 'react'

class FormGroup extends Component {

	constructor(props) {
		super(props)

		this.state = {
			field: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const name = event.target.name
		const value = event.target.value

		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		const { field } = this.state

		alert(`You have entered: ${field}`)
		event.preventDefault()
	}

	render() {
	    return (
	        <form onSubmit={this.handleSubmit}>
	            <input 
	            	type='text' 
	            	name="field"
	            	onChange={this.handleChange}
	            	value={this.state.field} />
	            <button type='submit'>Submit</button>
	        </form>
	    )
	}
}

export default FormGroup