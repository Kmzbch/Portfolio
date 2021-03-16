import { FETCH_CURRENT_PAGE, SET_CURRENT_PAGE } from '../actionTypes';

const initialState = {
	currentPage: 'default'
};

export default function currentPageReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_CURRENT_PAGE:
			return {
				...state
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload.pageType
			};
		default:
			return state;
	}
}
