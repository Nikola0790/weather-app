import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from "./allDataTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducerAllData = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducerAllData;
