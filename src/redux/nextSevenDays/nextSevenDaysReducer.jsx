import {
  NEXT_SEVEN_DAYS_REQUEST,
  NEXT_SEVEN_DAYS_SUCCESS,
  NEXT_SEVEN_DAYS_FAILURE,
} from "./nextSevenDaysTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducerNextSevenDays = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SEVEN_DAYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEXT_SEVEN_DAYS_SUCCESS:
      return {
        loading: true,
        data: action.payload,
        error: "",
      };
    case NEXT_SEVEN_DAYS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducerNextSevenDays;
