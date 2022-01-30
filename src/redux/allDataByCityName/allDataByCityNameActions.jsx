import {
  ALL_DATA_BY_CITY_NAME_REQUEST,
  ALL_DATA_BY_CITY_NAME_SUCCESS,
  ALL_DATA_BY_CITY_NAME_FAILURE,
} from "./allDataByCityNameTypes";

export const actionAllDataByCityNameRequest = () => {
  return {
    type: ALL_DATA_BY_CITY_NAME_REQUEST,
  };
};

export const actionAllDataByCityNameSuccess = (data) => {
  return {
    type: ALL_DATA_BY_CITY_NAME_SUCCESS,
    payload: data,
  };
};

export const actionAllDataByCityNameFailure = (error) => {
  return {
    type: ALL_DATA_BY_CITY_NAME_FAILURE,
    payload: error,
  };
};
