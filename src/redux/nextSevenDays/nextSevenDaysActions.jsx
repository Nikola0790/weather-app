import {
  NEXT_SEVEN_DAYS_REQUEST,
  NEXT_SEVEN_DAYS_SUCCESS,
  NEXT_SEVEN_DAYS_FAILURE,
} from "./nextSevenDaysTypes";

export const nextSevenDaysRequest = () => {
  return {
    type: NEXT_SEVEN_DAYS_REQUEST,
  };
};

export const nextSevenDaysSuccess = (data) => {
  return {
    type: NEXT_SEVEN_DAYS_SUCCESS,
    payload: data,
  };
};

export const nextSevenDaysFailure = (error) => {
  return {
    type: NEXT_SEVEN_DAYS_FAILURE,
    payload: error,
  };
};
