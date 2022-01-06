import { url, apiKey } from "../url_apikey/urlApiKey";

// current weather data by city name
export const getCurrentDataByCityName = (city) => {
  return fetch(`${url}weather?q=${city}&appid=${apiKey}&units=metric`).then(
    (response) => {
      return response.json();
    }
  );
};

// current weather data by geolocation
export const getCurrentDataByGeoCoordinates = (latitude, longitude) => {
  return fetch(
    `${url}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};
