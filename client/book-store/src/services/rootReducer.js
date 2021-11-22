import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import authReducer from './user/auth/authReducer';
import bookreducer from './book/bookReducer'

const rootReducer = combineReducers({
	user: userReducer,
	book:bookreducer,
	auth:authReducer

});

export default rootReducer;