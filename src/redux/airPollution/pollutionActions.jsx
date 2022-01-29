import {
  AIR_POLLUTION_REQUEST,
  AIR_POLLUTION_SUCCESS,
  AIR_POLLUTION_FAILURE,
} from "./pollutionTypes";

export const actionAirPollutionRequest = () => {
  return {
    type: AIR_POLLUTION_REQUEST,
  };
};

export const actionAirPollutionSuccess = (data) => {
  return {
    type: AIR_POLLUTION_SUCCESS,
    payload: data,
  };
};

export const actionAirPollutionFailure = (error) => {
  return {
    type: AIR_POLLUTION_FAILURE,
    payload: error,
  };
};
