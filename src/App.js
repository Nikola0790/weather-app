import { getDataByCityName, getDataByGeolocation } from "./service/service";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("Obrenovac");
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});

  // useEffect for city name
  /*  useEffect(() => {
    getDataByCityName(city).then((response) => setData(response));
  }, []); */

  // useEffect for geolocation
  useEffect(() => {
    getDataByGeolocation(latitude, longitude).then((response) =>
      setData(response)
    );
  }, [latitude, longitude]);

  // take geolocation !!!
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    setLatitude(latitude);
    setLongitude(longitude);
  }
  function error(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }

  /*  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else { */
  navigator.geolocation.getCurrentPosition(success, error);
  /* } */

  if (!!data) {
    console.log(data);
  } else {
    console.log("LOADING");
  }
  /*   console.log(data); */
  return (
    <div className="App">
      <h1>Weather APP</h1>
    </div>
  );
}

export default App;
