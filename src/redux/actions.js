import { FETCH_CURRENT_PAGE, SET_CURRENT_PAGE } from './actionTypes';

export const fetchCurrentPage = () => {
	return (dispatch) => {
		dispatch({
			type: FETCH_CURRENT_PAGE
		});
	};
};

export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	payload: {
		pageType: currentPage
	}
});
