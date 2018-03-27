import React from 'react'
import ReactDOM from 'react-dom'

// Image processed from src/ directory and added to dist/ directory
import ImageExample from './img/react-logo.png'

import FormField from './components/2-molecules/form-field/FormField'

ReactDOM.render (
    <FormField labelFor='firstname' labelValue='First name' name='firstname' />,
    document.getElementById('root')
)