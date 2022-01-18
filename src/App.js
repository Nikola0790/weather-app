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

function App() {
  const [data, setData] = useState("");
  const [cityAsParametr, setCityAsParametr] = useState("");
  const [nameByGeo, setNameByGeo] = useState([]);
  const [cityNameSearch, setCityNameSearch] = useState({
    name: "",
    country: "",
  });
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [dataNext5Days, setDataNext5Days] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numNextDay, setNumNextDay] = useState("");
  const [airPollution, setAirPollution] = useState([]);

  useEffect(() => {
    if (cityAsParametr === "") {
      setScreenWidth(window.innerWidth);
      if (typeof latitude === "number" && typeof longitude === "number") {
        getAllDataByGeolocation(latitude, longitude).then((response) =>
          setData(response)
        );
        getLocationNameByCordinates(latitude, longitude).then((response) => {
          setNameByGeo(response[0].name);
        });
        getDataFor_5_DaysByGeolocation(latitude, longitude).then((response) => {
          setDataNext5Days(response);
        });
        getAirPollutionData(latitude, longitude).then((response) =>
          setAirPollution(response)
        );
      } else {
        console.log("loading");
      }
    } else {
      setScreenWidth(window.innerWidth);
      getCurrentDataByCityName(cityAsParametr).then((response) => {
        setCityNameSearch({
          name: response.name,
          country: response.sys.country,
        });
        getAllDataByGeolocation(response.coord.lat, response.coord.lon).then(
          (response) => setData(response)
        );
        getDataFor_5_DaysByGeolocation(
          response.coord.lat,
          response.coord.lon
        ).then((response) => {
          setDataNext5Days(response);
        });
        getAirPollutionData(response.coord.lat, response.coord.lon).then(
          (response) => setAirPollution(response)
        );
      });
    }
  }, [latitude, longitude, cityAsParametr, nameByGeo]);

  // take geolocation !!!
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  }
  function errorr(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, errorr);

  if (data.cod === "400" || data === "") {
    return <p>LOADING</p>;
  }

  if (data.cod == 404) {
    return <p>{data.message}</p>;
  }

  return (
    <div className="container">
      <Router>
        <Header
          setCity={setCityAsParametr}
          data={data}
          name={cityNameSearch}
          nameByGeo={nameByGeo}
          id={numNextDay}
        />
        <Routes>
          <Route
            path="/details"
            element={<Details data={data} id={numNextDay} />}
          />
          <Route
            path="/main"
            element={
              <AllComponets
                data={data}
                dataNext5Days={dataNext5Days}
                screenWidth={screenWidth}
                setDay={setNumNextDay}
                resetId={setNumNextDay}
                airPollution={airPollution}
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
