// @flow

import React from 'react'
import type { LabelType } from './Label.types'

function Label ({ labelFor, labelValue }: LabelType) {
	return (
		<label htmlFor={labelFor} className='label'>
			{labelValue}
		</label>
	)
}

export default Label