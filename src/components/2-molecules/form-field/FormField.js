// @flow

import React from 'react'
import Label from '../../1-atoms/label/Label'
import Input from '../../1-atoms/input/Input'
import type { FormFieldType } from './FormField.types'

// TESTING THE REDUX STORE
import { connect } from 'react-redux'

// Adding state and actions as props - 'todos'
const FormField = ({ labelFor, labelValue, name, type = 'text', placeholder, todos }: FormFieldType) => {

	const renderLabel = () =>
		<Label {...{ labelFor, labelValue }} />

	const renderInput = () =>
		<Input {...{ name, type, placeholder }} />

	//The component receives the state and actions as props
	const renderText = () =>
		<p>{todos.text}</p>

	return (
		<div className='field-container'>
			{renderLabel()}
			{renderInput()}
			{renderText()}
		</div>
	)
}

// mapStateToProps function used to retrieve state information
// Also used to match those state values to their corresponding React props
// Should always return one or more key value pairs
// The key(s) are React props
// The value(s) are the Redux state items we're mapping to those props
// This function maps the state to a prop called 'state'
const mapStateToProps = (state) => ({
	todos: state.todos[0]
})

// To use the connect function provided by react-redux
// We should now have access to the Redux store
// https://www.learnhowtoprogram.com/react/redux-716c6ba7-bcca-4d01-97ab-3a0a2723c0aa/mapping-redux-state-to-react-props
// https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1
// https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
/* export default connect()(FormField) */

// Pass the mapStateToProps to the connect() function
export default connect(mapStateToProps)(FormField)