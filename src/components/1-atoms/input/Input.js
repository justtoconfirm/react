import React from 'react'

function Input ({ name, type = 'text', placeholder = '' }) {
	return (
		<input {...{ name, type, placeholder }} className='input' />
	)
}

export default Input