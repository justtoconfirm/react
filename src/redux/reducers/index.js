import { combineReducers } from 'redux'
import oneReducer from './reducer-one'
import twoReducer from './reducer-two'

const rootReducer = combineReducers({
	ones: oneReducer,
	twos: twoReducer
})

export default rootReducer