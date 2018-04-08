import React from 'react'
import Label from '../../1-atoms/label/Label'
import Input from '../../1-atoms/input/Input'

function FormField ({ labelFor, labelValue, name, type = 'text', placeholder }) {

	const renderLabel = () =>
		<Label {...{ labelFor, labelValue }} />

	const renderInput = () =>
		<Input {...{ name, type, placeholder }} />

	return (
		<div className='field__container'>
			{renderLabel()}
			{renderInput()}
		</div>
	)
}

export default FormField