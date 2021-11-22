import * as BT from "./bookTypes";

  import axios from "axios";

  export const saveBook = book => {
	  return dispatch => {
		  dispatch(saveBookRequest());
		  axios.post("http://localhost:8080/api/v1/books/add",book)
		  .then(response =>{
			  dispatch(BookSuccess(response.data));
		  })
		  .catch(error =>{
			  dispatch(BookFailure(error))
		  })
	  }
  };

  const saveBookRequest = () =>{
	  return {
		  type: BT.SAVE_BOOK_REQUEST
	  }
  };

  const updateBookRequest = () =>{
	return {
		type: BT.UPDATE_BOOK_REQUEST
	}
};

export const updateBook = book => {
	return dispatch => {
		dispatch(updateBookRequest());
		axios.put("http://localhost:8080/api/v1/books/update",book)
		.then(response =>{
			dispatch(BookSuccess(response.data));
		})
		.catch(error =>{
			dispatch(BookFailure(error))
		})
	}
}

const fetchBookRequest = () =>{
	return {
		type: BT.FETCH_BOOK_REQUEST
	}
};

export const fetchBook = bookId => {
	return dispatch => {
		dispatch(fetchBookRequest());
		axios.get("http://localhost:8080/api/v1/books/"+bookId)
		.then(response =>{
			dispatch(BookSuccess(response.data));
		})
		.catch(error =>{
			dispatch(BookFailure(error))
		})
	}
};

const deleteBookRequest = () =>{
	return {
		type: BT.DELETE_BOOK_REQUEST
	}
};

export const deleteBook = bookId => {
	return dispatch => {
		dispatch(deleteBookRequest());
		axios.delete("http://localhost:8080/api/v1/books/"+bookId)
		.then(response =>{
			dispatch(BookSuccess(response.data));
		})
		.catch(error =>{
			dispatch(BookFailure(error))
		})
	}
};



  const BookSuccess = book =>{
	return {
		type: BT.BOOK_SUCCESS,
		payload: book
	}
};

const BookFailure = error =>{
	return {
		type: BT.BOOK_FAILURE,
		payload :error
	}
};

export const fetchLanguages= () => {
		return dispatch => {
			dispatch({
				type:BT.FETCH_LANGUAGES_REQUEST
			});
			axios
			.get("http://localhost:8080/api/v1/books/languages")
			.then((response) => {
				dispatch({
					type:BT.LANGUAGE_SUCCESS,
					payload:response.data
				})
			})
			.catch(error=>{
				dispatch({
					type:BT.LANGUAGE_FAILURE,
					payload:error
				})
			})
		}
};

export const fetchGenres= () => {
	return dispatch => {
		dispatch({
			type:BT.FETCH_GENRES_REQUEST
		});
		axios
		.get("http://localhost:8080/api/v1/books/genres")

		.then((response) => {
			dispatch({
				type:BT.GENRE_SUCCESS,
				payload:response.data
			})
		})
		.catch(error=>{
			dispatch({
				type:BT.GENRE_FAILURE,
				payload:error
			})
		})
	}
}
