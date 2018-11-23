import React from 'react'
import Button from './1-atoms/button/Button'
import FormField from './2-molecules/form-field/FormField'

// TESTING
import TestComponent from './1-atoms/test/TestComponent'

const App = () => {
	return (
		<React.Fragment>
			<FormField labelFor='firstname' labelValue='First name' name='firstname' />
			<FormField labelFor='lastname' labelValue='Last name' name='lastname' />
			<FormField labelFor='email' labelValue='Email' type='email' placeholder='Email' name='email' />
			<Button type='submit' theme='primary'>Submit</Button>
			<TestComponent /> 
		</React.Fragment>
	)
}

export default App