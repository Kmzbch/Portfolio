import { combineReducers } from 'redux';
import currentPageReducer from './currentPageReducer';

export default combineReducers({
	storage: currentPageReducer
});
