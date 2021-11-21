import {
	SAVE_BOOK_REQUEST,
	BOOK_SUCCESS,
	BOOK_FAILURE,
	UPDATE_BOOK_REQUEST,
	DELETE_BOOK_REQUEST,
	FETCH_BOOK_REQUEST
  } from "./bookTypes";

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
		  type: SAVE_BOOK_REQUEST
	  }
  };

  const updateBookRequest = () =>{
	return {
		type: UPDATE_BOOK_REQUEST
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
		type: FETCH_BOOK_REQUEST
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
		type: DELETE_BOOK_REQUEST
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
		type: BOOK_SUCCESS,
		payload: book
	}
};

const BookFailure = error =>{
	return {
		type: BOOK_FAILURE,
		payload :error
	}
};
