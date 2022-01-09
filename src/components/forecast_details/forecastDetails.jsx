const Details = ({ data, id }) => {
  console.log(data);
  const dayData = data.daily.filter((item, index) => {
    if (index === id) {
      return item;
    }
  });

  console.log(dayData);
  const icon = dayData[0].weather[0].icon;
  const iconDescription = dayData[0].weather[0].description;
  const tempDay = Math.round(dayData[0].temp.day);
  const tempMax = Math.round(dayData[0].temp.max);
  const tempMin = Math.round(dayData[0].temp.min);
  const tempMorning = Math.round(dayData[0].temp.morn);
  const tempEve = Math.round(dayData[0].temp.eve);
  const tempNight = Math.round(dayData[0].temp.night);
  const feelsDayTemp = Math.round(dayData[0].feels_like.day);
  const feelsMornTemp = Math.round(dayData[0].feels_like.morn);
  const feelsEveTemp = Math.round(dayData[0].feels_like.eve);
  const feelsNightTemp = Math.round(dayData[0].feels_like.night);
  const humidity = dayData[0].humidity;
  const chanceOfPrecipitation = dayData[0].pop * 100;
  const pressure = dayData[0].pressure;
  const uvIndex = dayData[0].uvi;
  const windSpeed = dayData[0].wind_speed;
  const windDirection = dayData[0].wind_deg;

  return (
    <div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <p>{iconDescription}</p>
      </div>
      <div>
        <p>Temperature</p>
        <p>
          {tempDay} <br /> Day
        </p>
        <p>
          {tempNight} <br />
          Night
        </p>
        <p>
          {tempMax} <br />
          Max
        </p>
        <p>
          {tempMin} <br />
          Min
        </p>
        <p>
          {tempMorning} <br />
          Morning
        </p>
        <p>
          {tempEve} <br />
          Evening
        </p>
      </div>
      <div>
        <p>Feels like</p>
      </div>
    </div>
  );
};

export default Details;
