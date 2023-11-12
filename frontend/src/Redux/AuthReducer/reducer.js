import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  userDetails: false,
  token: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: payload.token,
        userDetails: payload.userDetails,
      };

    case LOGIN_FAILED:
      return { ...state, isLoading: false, isError: true };

    case LOGOUT_SUCCESS:
      return { ...state, initialState };

    default:
      return state;
  }
};
