import axios from "axios";

import * as Actions from "./actionTypes";

export const authStart = () => {
  return {
    type: Actions.AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: Actions.AUTH_SUCCESS,
    authData: data
  };
};

export const authFail = err => {
  return {
    type: Actions.AUTH_FAIL,
    authError: err
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAvxKoGJvhDvgK_KtOKQCE9NMJxYQ_EsR8",
        authData
      )
      .then()
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
