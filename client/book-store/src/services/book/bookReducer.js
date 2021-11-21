import {
	SAVE_BOOK_REQUEST,
	BOOK_SUCCESS,
	BOOK_FAILURE,
	UPDATE_BOOK_REQUEST,
	FETCH_BOOK_REQUEST
  } from "./bookTypes";

  const initialState = {
	  book:'',
	  error: ''
  }

  const reducer = (state=initialState,action) => {
	switch (action.type) {
		case SAVE_BOOK_REQUEST:
		  return {
			...state,
		  };
		  case FETCH_BOOK_REQUEST:
			return {
			  ...state,
			};
			case UPDATE_BOOK_REQUEST:
				return {
				  ...state,
				};
		case BOOK_SUCCESS:
		  return {
			book: action.payload,
			error: "",
		  };
		  case BOOK_FAILURE:
			  return{
				  book:'',
				  error:action.payload
			  };
			  default:
				  return state;
	  }

  }

  export default reducer;