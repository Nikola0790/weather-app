const apiKey = "12b42cefab96f10f922e9990cbf21bc4";
const url = "https://api.openweathermap.org/data/2.5/";
const urlCordinates = "http://api.openweathermap.org/geo/1.0/direct?q=";
const urlForNameByCordinates = "http://api.openweathermap.org/geo/1.0/reverse?";

/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */

// weather data by geolocation for next 7 days, current weather, 5 days historical weather, next 48 hours every hour weather data, alerts... ********************************************
export const getDataByGeolocation = (latitude, longitude) => {
  return fetch(
    `${url}onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};

/* ("https://api.openweathermap.org/data/2.5/weather?q=Ljubis&appid=12b42cefab96f10f922e9990cbf21bc4&units=metric"); */

// current weather data by city name ********************************************
export const getCurrentDataByCityName = (city) => {
  return fetch(`${url}weather?q=${city}&appid=${apiKey}&units=metric`).then(
    (response) => {
      return response.json();
    }
  );
};

/* api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */

// current weather data by geolocation ********************************************
export const getCurrentDataByGeoCoordinates = (latitude, longitude) => {
  return fetch(
    `${url}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};

/* api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} */

// weather forecast for next 5 days every 3 hours by city name ********************************************

export const getDataFor_5_DaysByCityName = (city) => {
  return fetch(`${url}forecast?q=${city}&appid=${apiKey}&units=metric`).then(
    (response) => response.json()
  );
};

/* api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} */

// weather forecast for next 5 days every 3 hours by geolocation ********************************************

export const getDataFor_5_DaysByGeolocation = (latitude, longitude) => {
  return fetch(
    `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};

/* http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key} */

export const getCordinatesByLocationName = (name) => {
  return fetch(`${urlCordinates}${name}&limit=5&appid=${apiKey}`).then(
    (response) => response.json()
  );
};

/* http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}*/

export const getLocationNameByCordinates = (lat, lon) => {
  return fetch(
    `${urlForNameByCordinates}lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`
  ).then((response) => response.json());
};
