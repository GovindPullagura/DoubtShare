import { DATA_FAILED, DATA_REQ, DATA_SUCCESS } from "./actionTypes";

const initialState = { isLoading: false, isError: false, data: [] };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_REQ:
      return { ...state, isLoading: true };

    case DATA_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case DATA_FAILED:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
