import React from 'react'

function Label ({ labelFor, labelValue }) {
	return (
		<label htmlFor={labelFor} className='label'>
			{labelValue}
		</label>
	)
}

export default Label