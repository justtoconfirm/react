import React from 'react'

import Input from '../../1-atoms/input/Input'

function FormField (props) {

	return (
		<div className='field__container'>
			<Input />
			<Input type="email" placeholder="Email" />
		</div>
	)
}

export default FormField