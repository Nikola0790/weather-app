import { getDataByCityName, getDataByGeolocation } from "./service/service";
import { useEffect, useState } from "react";
import Header from "./components/header/header";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});

  // useEffect for city name
  /*  useEffect(() => {
    getDataByCityName(city).then((response) => setData(response));
  }, []); */

  // useEffect for geolocation
  useEffect(() => {
    if (city === "") {
      getDataByGeolocation(latitude, longitude).then((response) =>
        setData(response)
      );
    } else {
      getDataByCityName(city).then((response) => setData(response));
    }
  }, [latitude, longitude, city]);

  // take geolocation !!!
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    setLatitude(latitude);
    setLongitude(longitude);
  }
  function errorr(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }

  /*  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else { */
  navigator.geolocation.getCurrentPosition(success, errorr);
  /* } */

  if (!!data) {
    console.log(data);
  } else {
    console.log("LOADING");
  }
  /*   console.log(data); */
  return (
    <>
      <Header setCity={setCity} data={data} />
      <div className="App">
        <h1>Weather APP</h1>
      </div>
    </>
  );
}

export default App;
