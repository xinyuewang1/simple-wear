import axios from "axios";

import * as Actions from "./actionTypes";

export const authStart = () => {
  return {
    type: Actions.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: Actions.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = err => {
  return {
    type: Actions.AUTH_FAIL,
    error: err
  };
};

export const logout = () => {
  return { type: Actions.LOG_OUT };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;
    if (!isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`;
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
