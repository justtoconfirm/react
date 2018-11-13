import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import { addTodo } from './redux/actions/action-add-todo'
import App from './components/App'

/*
Global variables for the store and action
Can be accessed from within the browser console
*/
window.store = store
window.addTodo = addTodo

// Access the current state
console.log(store.getState())

// Subscribe method accepts a callback that will fire whenever an action is dispatched
// Dispatching - notifying the store that we want to change the state.
// Listen for state updates using subscribe
store.subscribe(() => console.log('Look ma, Redux!!'))

// Change the state in Redux by dispatching an action.
// We need to call the dispatch method
// This will add a new item to the state
store.dispatch( addTodo({ text: 'Hello World' }))

// Verify that the state has changed
console.log(store.getState())

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)