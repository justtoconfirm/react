import { ADD_TODO } from '../constants/action-types'

const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			state.push(action.text);
			return state;
		default:
			return state;
	}
}

export default todosReducer