import { getAllDataByGeolocation } from "./service/all_weather_data_onecall/service_all_weather_data_onecall";
import {
  getCurrentDataByCityName,
  getCurrentDataByGeoCoordinates,
} from "./service/current_weather_data/service_current_weather_data";
import {
  getCordinatesByLocationName,
  getLocationNameByCordinates,
} from "./service/geocoding_api/service_geo_data";
import {
  getDataFor_5_DaysByCityName,
  getDataFor_5_DaysByGeolocation,
} from "./service/weather_data_next_5_days/service_weather_data_next_5_days";
import { getAirPollutionData } from "./service/air_pollution_data/airPollution";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "./components/forecast_details/forecastDetails";
import AllComponets from "./components/main_content/allMainComponents/allcopmonents";
import {
  actionAirPollutionRequest,
  actionAirPollutionSuccess,
  actionAirPollutionFailure,
} from "./redux/airPollution/pollutionActions";
import { useDispatch, useSelector } from "react-redux";
import {
  allDataSuccess,
  allDataRequest,
  allDataFailure,
} from "./redux/allData/allDataActions";
import {
  nextSevenDaysFailure,
  nextSevenDaysRequest,
  nextSevenDaysSuccess,
} from "./redux/nextSevenDays/nextSevenDaysActions";
import {
  cityNameActionRequest,
  cityNameActionSuccess,
  cityNameActionFailure,
} from "./redux/cityNameByCoordinates/cityNameActions";
import {
  actionAllDataByCityNameRequest,
  actionAllDataByCityNameSuccess,
  actionAllDataByCityNameFailure,
} from "./redux/allDataByCityName/allDataByCityNameActions";

function App() {
  const [cityAsParametr, setCityAsParametr] = useState("");
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numNextDay, setNumNextDay] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.allData.data);
  const lat = useSelector((state) => state.allDataByCityName.data.lat);
  const lon = useSelector((state) => state.allDataByCityName.data.lon);

  const fetchAirPollData = (lat, lon) => {
    return (dispatch) => {
      dispatch(actionAirPollutionRequest);
      getAirPollutionData(lat, lon)
        .then((response) => {
          const data = response;
          dispatch(actionAirPollutionSuccess(data));
        })
        .catch((error) => {
          dispatch(actionAirPollutionFailure(error.message));
        });
    };
  };

  const fetchAllData = (lat, lon) => {
    return (dispatch) => {
      dispatch(allDataRequest);
      getAllDataByGeolocation(lat, lon)
        .then((response) => {
          const data = response;
          dispatch(allDataSuccess(data));
        })
        .catch((error) => {
          dispatch(allDataFailure(error.message));
        });
    };
  };

  const fetchNextSevenDaysData = (lat, lon) => {
    return (dispatch) => {
      dispatch(nextSevenDaysRequest);
      getDataFor_5_DaysByGeolocation(lat, lon)
        .then((response) => {
          const data = response;
          dispatch(nextSevenDaysSuccess(data));
        })
        .catch((error) => {
          dispatch(nextSevenDaysFailure(error.message));
        });
    };
  };

  const fetchCityNameByCoordinates = (lat, lon) => {
    return (dispatch) => {
      dispatch(cityNameActionRequest);
      getLocationNameByCordinates(lat, lon)
        .then((response) => {
          const data = response;
          dispatch(cityNameActionSuccess(data));
        })
        .catch((error) => {
          dispatch(cityNameActionFailure(error.message));
        });
    };
  };

  const fetchDataByCityName = (cityAsParametr) => {
    return (dispatch) => {
      dispatch(actionAllDataByCityNameRequest);
      getCurrentDataByCityName(cityAsParametr)
        .then((response) => {
          dispatch(
            actionAllDataByCityNameSuccess({
              name: response.name,
              country: response.sys.country,
              lat: response.coord.lat,
              lon: response.coord.lon,
            })
          );
        })
        .catch((error) => {
          dispatch(actionAllDataByCityNameFailure(error.message));
        });
    };
  };

  useEffect(() => {
    if (cityAsParametr === "") {
      setScreenWidth(window.innerWidth);
      if (typeof latitude === "number" && typeof longitude === "number") {
        dispatch(fetchCityNameByCoordinates(latitude, longitude));
        dispatch(fetchAirPollData(latitude, longitude));
        dispatch(fetchAllData(latitude, longitude));
        dispatch(fetchNextSevenDaysData(latitude, longitude));
        dispatch(fetchDataByCityName(cityAsParametr));
      }
    } else {
      setScreenWidth(window.innerWidth);
      dispatch(fetchDataByCityName(cityAsParametr));
      if (lat !== undefined && lon !== undefined) {
        dispatch(fetchAirPollData(lat, lon));
        dispatch(fetchAllData(lat, lon));
        dispatch(fetchNextSevenDaysData(lat, lon));
      }
    }
  }, [latitude, longitude, cityAsParametr, lat, lon]);

  // take geolocation !!!
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  }
  function errorr(error) {
    console.log(`ERROR(${error.code}): ${error.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, errorr);

  if (data.length === 0) {
    return <p>LOADING</p>;
  }

  /*   if (data.cod == 404) {
    return <p>{data.message}</p>;
  } */
  return (
    <div className="container">
      <Router>
        <Header setCity={setCityAsParametr} id={numNextDay} />
        <Routes>
          <Route
            path="/details"
            element={<Details data={data} id={numNextDay} />}
          />
          <Route
            path="/main"
            element={
              <AllComponets
                screenWidth={screenWidth}
                setDay={setNumNextDay}
                resetId={setNumNextDay}
              />
            }
          />
          <Route path="/" element={<Navigate to="/main" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
