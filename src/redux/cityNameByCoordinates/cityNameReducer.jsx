import {
  CITY_NAME_REQUEST,
  CITY_NAME_SUCCESS,
  CITY_NAME_FAILURE,
} from "./cityNameTypes";

const initialState = {
  loading: false,
  data: "",
  error: "",
};

const reducerCityNameByCoordinates = (state = initialState, action) => {
  switch (action.type) {
    case CITY_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CITY_NAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CITY_NAME_FAILURE:
      return {
        loading: false,
        data: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerCityNameByCoordinates;
