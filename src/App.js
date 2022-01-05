import {
  getCordinatesByLocationName,
  getCurrentDataByCityName,
  getDataByGeolocation,
  getLocationNameByCordinates,
} from "./service/service";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import CurrentTempAndStats from "./components/main_content/current_temperature_and_stats/current_temp";

function App() {
  const [data, setData] = useState("");
  const [cityAsParametr, setCityAsParametr] = useState("");
  const [nameByGeo, setNameByGeo] = useState("");
  const [cityNameSearch, setCityNameSearch] = useState({
    name: "",
    country: "",
  });
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});

  // useEffect for city name
  /*  useEffect(() => {
    getDataByCityName(city).then((response) => setData(response));
  }, []); */

  // useEffect for geolocation
  useEffect(() => {
    if (cityAsParametr === "") {
      getDataByGeolocation(latitude, longitude).then((response) =>
        setData(response)
      );
      getLocationNameByCordinates(latitude, longitude).then((response) =>
        setNameByGeo(response[0].name)
      );
    } else {
      getCurrentDataByCityName(cityAsParametr).then((response) => {
        console.log(response);
        setCityNameSearch({
          name: response.name,
          country: response.sys.country,
        });
        getDataByGeolocation(response.coord.lat, response.coord.lon).then(
          (response) => setData(response)
        );
        /* getLocationNameByCordinates(
          response.coord.lat,
          response.coord.lon
        ).then((response) => console.log(response)); */
      });
      /*  getDataByCityName(city).then((response) => setData(response)); */
      /* getCordinatesByLocationName(city).then((response) => {
        console.log(response);
      }); */
    }
  }, [latitude, longitude, cityAsParametr]);

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

  if (!!data) {
    console.log(data);
  } else {
    console.log("LOADING");
  }

  console.log(nameByGeo);
  if (data.cod == 404) {
    return <p>{data.message}</p>;
  }
  return (
    <div className="container">
      <Header
        setCity={setCityAsParametr}
        data={data}
        name={cityNameSearch}
        nameByGeo={nameByGeo}
      />
      <CurrentTempAndStats data={data} />
      <div className="App"></div>
    </div>
  );
}

export default App;
