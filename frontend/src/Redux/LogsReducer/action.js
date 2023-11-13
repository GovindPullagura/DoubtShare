import { DATA_FAILED, DATA_REQ, DATA_SUCCESS } from "./actionTypes";
import axios from "axios";

export const dataReqAction = () => {
  return { type: DATA_REQ };
};

export const dataSuccessAction = (payload) => {
  return { type: DATA_SUCCESS, payload };
};

export const dataFailedAction = () => {
  return { type: DATA_FAILED };
};

export const getBackendData = (dispatch) => {
  dispatch(dataReqAction());

  axios
    .get(`http://localhost:8080/doubts/history`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((res) => dispatch(dataSuccessAction(res.data)))
    .catch((error) => {
      console.log(error.message);
      dispatch(dataFailedAction());
    });
};
