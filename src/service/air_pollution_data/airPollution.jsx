import { url, apiKey } from "../url_apikey/urlApiKey";

export const getAirPollutionData = (latitude, longitude) => {
  return fetch(
    `${url}air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};
