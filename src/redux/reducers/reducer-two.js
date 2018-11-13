import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
	tests: []
}

const twoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, tests: [...state.tests, action.payload] }
		default:
			return state
	}
}

export default twoReducer