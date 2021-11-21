import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import bookreducer from './book/bookReducer'

const rootReducer = combineReducers({
	user: userReducer,
	book:bookreducer
});

export default rootReducer;