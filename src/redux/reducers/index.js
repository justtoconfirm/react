import { combineReducers } from 'redux'
import todosReducer from './reducer-todos'

// Add multiple reducers here
const rootReducer = combineReducers({
	todos: todosReducer
})

export default rootReducer