import {
	LOGIN_REQUEST,
	SUCCESS,
	LOGOUT_REQUEST,
	FAILURE,
  } from "./authTypes";

  export const authenticateUser = (email,password) =>{
	  return dispatch=>{
		dispatch(loginRequest());
		if(email==="test" && password==="test"){
			dispatch(success(true));
		}
		else {
			dispatch(failure());
		}

	  }
  }

  const loginRequest = () => {

	return {
		type:LOGIN_REQUEST
	}
  };

  export const logoutUser = (email,password) =>{
	return dispatch=>{
	  dispatch(logoutRequest());
		dispatch(success(false));

	}
}

  const logoutRequest = () => {

	return {
		type:LOGOUT_REQUEST
	}
  };

  const success = isLoggedIn => {

	return {
		type:SUCCESS,
		payload:isLoggedIn
	}
  };

  const failure = () => {

	return {
		type:FAILURE,
		payload:false
	}
  };