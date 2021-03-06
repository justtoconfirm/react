// @flow

import React from 'react'
import type { InputType } from './Input.types'

const Input = ({ name, type = 'text', placeholder }: InputType) => {
	return (
		<input {...{ name, type, placeholder }} className='input' />
	)
}

export default Input