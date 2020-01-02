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
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");

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
        // console.log(response);

        const expirationTime = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationTime", expirationTime);
        localStorage.setItem("userId", response.data.localId);

        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        // console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const expirationTime = new Date(localStorage.getItem("expirationTime"));
    if (token && expirationTime > new Date()) {
      const localId = localStorage.getItem("userId");
      dispatch(authSuccess(token, localId));
      dispatch(
        checkAuthTimeout(
          (expirationTime.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      dispatch(logout());
    }
  };
};
