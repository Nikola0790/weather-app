import { url, apiKey } from "../url_apikey/urlApiKey";

// weather forecast for next 5 days every 3 hours by city name
export const getDataFor_5_DaysByCityName = (city) => {
  return fetch(`${url}forecast?q=${city}&appid=${apiKey}&units=metric`).then(
    (response) => response.json()
  );
};

// weather forecast for next 5 days every 3 hours by geolocation
export const getDataFor_5_DaysByGeolocation = (latitude, longitude) => {
  return fetch(
    `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};
