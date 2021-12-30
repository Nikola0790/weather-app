const apiKey = "12b42cefab96f10f922e9990cbf21bc4";
const url = "https://api.openweathermap.org/data/2.5/";
/* ("https://api.openweathermap.org/data/2.5/weather?q=Ljubis&appid=12b42cefab96f10f922e9990cbf21bc4&units=metric"); */

export const getDataByCityName = (city) => {
  return fetch(`${url}weather?q=${city}&appid=${apiKey}&units=metric`).then(
    (response) => {
      return response.json();
    }
  );
};
/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */

export const getDataByGeolocation = (latitude, longitude) => {
  return fetch(
    `${url}onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
};
