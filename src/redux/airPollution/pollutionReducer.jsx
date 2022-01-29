import {
  AIR_POLLUTION_REQUEST,
  AIR_POLLUTION_SUCCESS,
  AIR_POLLUTION_FAILURE,
} from "./pollutionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducerAirPollution = (state = initialState, action) => {
  switch (action.type) {
    case AIR_POLLUTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AIR_POLLUTION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case AIR_POLLUTION_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerAirPollution;
