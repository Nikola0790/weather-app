import {
  CITY_NAME_REQUEST,
  CITY_NAME_SUCCESS,
  CITY_NAME_FAILURE,
} from "./cityNameTypes";

export const cityNameActionRequest = () => {
  return {
    type: CITY_NAME_REQUEST,
  };
};

export const cityNameActionSuccess = (data) => {
  return {
    type: CITY_NAME_SUCCESS,
    payload: data,
  };
};

export const cityNameActionFailure = (error) => {
  return {
    type: CITY_NAME_FAILURE,
    payload: error,
  };
};
