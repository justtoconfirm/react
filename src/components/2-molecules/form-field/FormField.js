import React from 'react'

import Input from '../../1-atoms/input/Input'

function FormField ({ name, type = 'text', placeholder }) {

	const renderInput = () =>
		<Input name={name} type={type} placeholder={placeholder} />

	return (
		<div className='field__container'>
			{renderInput()}
			{/* <Input type="email" placeholder="Email" /> */}
		</div>
	)
}

export default FormField