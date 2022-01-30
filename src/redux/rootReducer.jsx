import { combineReducers } from "redux";
import reducerAllData from "./allData/allDataReducer";
import reducerAirPollution from "./airPollution/pollutionReducer";
import reducerNextSevenDays from "./nextSevenDays/nextSevenDaysReducer";
import reducerCityNameByCoordinates from "./cityNameByCoordinates/cityNameReducer";
import reducerAllDataByCityName from "./allDataByCityName/allDataByCityNameReducer";

const rootReducer = combineReducers({
  allData: reducerAllData,
  airPollution: reducerAirPollution,
  nextSevenDaysData: reducerNextSevenDays,
  cityNameByCoordinates: reducerCityNameByCoordinates,
  allDataByCityName: reducerAllDataByCityName, //only get city name, country name, latitude and longitude
});

export default rootReducer;
