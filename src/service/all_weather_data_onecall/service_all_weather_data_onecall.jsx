import { url, apiKey } from "../url_apikey/urlApiKey";

// weather data by geolocation for next 7 days, current weather, 5 days historical weather, next 48 hours every hour weather data, alerts...
export const getAllDataByGeolocation = (latitude, longitude) => {
  return fetch(
    `${url}onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};
