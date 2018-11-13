import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import { addArticle } from './redux/actions/index'
import App from './components/App'

/*
Global variables for the store and action
Can be accessed from within the browser console
*/
window.store = store
window.addArticle = addArticle

// Access the current state
console.log(store.getState())

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)