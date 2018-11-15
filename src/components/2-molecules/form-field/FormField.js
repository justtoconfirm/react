// @flow

import React from 'react'
import Label from '../../1-atoms/label/Label'
import Input from '../../1-atoms/input/Input'
import type { FormFieldType } from './FormField.types'

// TESTING THE REDUX STORE
import { connect } from 'react-redux'

const FormField = ({ labelFor, labelValue, name, type = 'text', placeholder }: FormFieldType) => {

	const renderLabel = () =>
		<Label {...{ labelFor, labelValue }} />

	const renderInput = () =>
		<Input {...{ name, type, placeholder }} />

	return (
		<div className='field-container'>
			{renderLabel()}
			{renderInput()}
		</div>
	)
}

// mapStateToProps function used to retrieve state information
// Also used to match those state values to their corresponding React props
// Should always return one or more key value pairs
// The key(s) are React props
// The value(s) are the Redux state items we're mapping to those props
const mapStateToProps = state => {

}

// To use the connect function provided by react-redux
// We should now have access to the Redux store
// https://www.learnhowtoprogram.com/react/redux-716c6ba7-bcca-4d01-97ab-3a0a2723c0aa/mapping-redux-state-to-react-props
/* export default connect()(FormField) */

// Pass the mapStateToProps to the connect() function
export default connect(mapStateToProps)(FormField)