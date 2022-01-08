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
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import CurrentTempAndStats from "./components/main_content/current_temperature_and_stats/current_temp";
import TodaysWeather from "./components/main_content/weather_by_hour/todayWeather";
import NextSevenDays from "./components/main_content/next_7_days/next_7_days";

function App() {
  const [data, setData] = useState("");
  const [cityAsParametr, setCityAsParametr] = useState("");
  const [nameByGeo, setNameByGeo] = useState({});
  const [cityNameSearch, setCityNameSearch] = useState({
    name: "",
    country: "",
  });
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});
  const [dataNext5Days, setDataNext5Days] = useState("");

  useEffect(() => {
    if (cityAsParametr === "") {
      getAllDataByGeolocation(latitude, longitude).then((response) =>
        setData(response)
      );
      getLocationNameByCordinates(latitude, longitude).then((response) => {
        setNameByGeo(response[0].name);
      });
      getDataFor_5_DaysByGeolocation(latitude, longitude).then((response) => {
        setDataNext5Days(response);
      });
    } else {
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
  console.log(data);
  console.log(dataNext5Days);
  return (
    <div className="container">
      <Header
        setCity={setCityAsParametr}
        data={data}
        name={cityNameSearch}
        nameByGeo={nameByGeo}
      />
      <CurrentTempAndStats data={data} />
      <TodaysWeather data={dataNext5Days} />
      <NextSevenDays data={data} />
      <div className="App"></div>
    </div>
  );
}

export default App;
