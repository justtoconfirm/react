import { combineReducers } from 'redux'
import oneReducer from './reducer-one'
import twoReducer from './reducer-two'
import todosReducer from './reducer-todos'

const rootReducer = combineReducers({
	ones: oneReducer,
	twos: twoReducer,
	todos: todosReducer
})

export default rootReducer