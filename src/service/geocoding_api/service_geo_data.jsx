import {
  urlCordinates,
  urlForNameByCordinates,
  apiKey,
} from "../url_apikey/urlApiKey";

export const getCordinatesByLocationName = (name) => {
  return fetch(`${urlCordinates}${name}&limit=5&appid=${apiKey}`).then(
    (response) => response.json()
  );
};

export const getLocationNameByCordinates = (lat, lon) => {
  return fetch(
    `${urlForNameByCordinates}lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`
  ).then((response) => response.json());
};
