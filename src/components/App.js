import React from 'react'
import FormField from './2-molecules/form-field/FormField'

function App () {
	return (
		<div>
			<FormField labelFor='firstname' labelValue='First name' name='firstname' />
			<FormField labelFor='lastname' labelValue='Last name' name='lastname' />
			<FormField labelFor='email' labelValue='Email' type='email' placeholder="Email" name='email' />
		</div>
	)
}

export default App