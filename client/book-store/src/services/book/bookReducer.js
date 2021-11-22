import 
* as BT
   from "./bookTypes";

  const initialState = {
	  book:'',
	  error: ''
  }

  const reducer = (state=initialState,action) => {
	switch (action.type) {
		case BT.SAVE_BOOK_REQUEST || BT.FETCH_BOOK_REQUEST 
		|| BT.UPDATE_BOOK_REQUEST || BT.DELETE_BOOK_REQUEST
		|| BT.FETCH_LANGUAGES_REQUEST || BT.FETCH_GENRES_REQUEST:
		  return {
			...state,
		  };
			
		case BT.BOOK_SUCCESS:
		  return {
			book: action.payload,
			error: "",
		  };
		  case BT.BOOK_FAILURE:
			return{
				book:'',
				error:action.payload
			};
		  case BT.LANGUAGE_SUCCESS:
			return {
			  languages: action.payload,
			  error: "",
			};
			case BT.LANGUAGE_FAILURE:
				return{
					languages:'',
					error:action.payload
				};
				case BT.GENRE_SUCCESS:
					return {
					  genres: action.payload,
					  error: "",
					};
					case BT.GENRE_FAILURE:
						return{
							genres:'',
							error:action.payload
						};
			  default:
				  return state;
	  }

  }

  export default reducer;