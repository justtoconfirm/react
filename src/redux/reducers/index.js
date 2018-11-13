import { combineReducers } from 'redux'
import oneReducer from './reducer-one'

const rootReducer = combineReducers({
	ones: oneReducer
})

export default rootReducer