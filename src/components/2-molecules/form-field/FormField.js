import React from 'react'

import Label from '../../1-atoms/label/Label'
import Input from '../../1-atoms/input/Input'

function FormField ({ labelFor, labelValue, name, type = 'text', placeholder }) {

	const renderLabel = () =>
		<Label labelFor={labelFor} labelValue={labelValue} />

	const renderInput = () =>
		<Input name={name} type={type} placeholder={placeholder} />

	return (
		<div className='field__container'>
			{renderLabel()}
			{renderInput()}
			{/* <Input type="email" placeholder="Email" /> */}
		</div>
	)
}

export default FormField