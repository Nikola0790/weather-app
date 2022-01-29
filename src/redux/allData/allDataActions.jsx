import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from "./allDataTypes";

export const allDataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

export const allDataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
};

export const allDataFailure = (error) => {
  return {
    type: DATA_FAILURE,
    payload: error,
  };
};
