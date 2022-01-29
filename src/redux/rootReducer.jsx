import { combineReducers } from "redux";
import reducerAllData from "./allData/allDataReducer";
import reducerAirPollution from "./airPollution/pollutionReducer";
import reducerNextSevenDays from "./nextSevenDays/nextSevenDaysReducer";
import reducerCityNameByCoordinates from "./cityNameByCoordinates/cityNameReducer";

const rootReducer = combineReducers({
  allData: reducerAllData,
  airPollution: reducerAirPollution,
  nextSevenDaysData: reducerNextSevenDays,
  cityNameByCoordinates: reducerCityNameByCoordinates,
});

export default rootReducer;
