import {
  ALL_DATA_BY_CITY_NAME_REQUEST,
  ALL_DATA_BY_CITY_NAME_SUCCESS,
  ALL_DATA_BY_CITY_NAME_FAILURE,
} from "./allDataByCityNameTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducerAllDataByCityName = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA_BY_CITY_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_DATA_BY_CITY_NAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case ALL_DATA_BY_CITY_NAME_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerAllDataByCityName;
