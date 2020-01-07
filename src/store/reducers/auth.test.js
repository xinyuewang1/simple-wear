import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authed: false
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authed: false
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "fake token",
          userId: "fake id"
        }
      )
    ).toEqual({
      token: "fake token",
      userId: "fake id",
      error: null,
      loading: false,
      authed: true
    });
  });
});
