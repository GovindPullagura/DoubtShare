import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

export const loginReqAction = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginFailAction = () => {
  return { type: LOGIN_FAILED };
};
export const logoutSuccessAction = () => {
  return { type: LOGOUT_SUCCESS };
};

export const login = (data) => (dispatch) => {
  dispatch(loginReqAction());
  axios
    .post("http://localhost:8080/auth/login", data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch(loginSuccessAction(res.data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(loginFailAction());
    });
};
export const handleLogout = (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutSuccessAction());
};
