import { DATA_FAILED, DATA_REQ, DATA_SUCCESS } from "./actionTypes";

export const dataReqAction = () => {
  return { type: DATA_REQ };
};

export const dataSuccessAction = (payload) => {
  return { type: DATA_SUCCESS, payload };
};

export const dataFailedAction = () => {
  return { type: DATA_FAILED };
};

export const getBackendData = (token) => (dispatch) => {};
