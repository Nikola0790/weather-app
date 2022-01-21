const Details = ({ data, id }) => {
  const dayData = data.daily.filter((item, index) => {
    if (index === id) {
      return item;
    }
  });

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
  const chanceOfPrecipitation = Math.round(dayData[0].pop * 100);
  const pressure = dayData[0].pressure;
  const uvIndex = Math.round(dayData[0].uvi);
  const windSpeed = dayData[0].wind_speed;
  const windDirectionDegree = dayData[0].wind_deg;
  // sunrise
  const sunriseUnixTimestamp = dayData[0].sunrise + data.timezone_offset - 3600;
  const dateSunrise = new Date(sunriseUnixTimestamp * 1000);
  const hoursSunrise = dateSunrise.getHours();
  const minutesSunrise = dateSunrise.getMinutes();
  // sunset
  const sunsetUnixTimestamp = dayData[0].sunset + data.timezone_offset - 3600;
  const dateSunset = new Date(sunsetUnixTimestamp * 1000);
  const hoursSunset = dateSunset.getHours();
  const minutesSunset = dateSunset.getMinutes();
  // moonrise
  const moonriseUnixTimestamp =
    dayData[0].moonrise + data.timezone_offset - 3600;
  const dateMoonrise = new Date(moonriseUnixTimestamp * 1000);
  const hoursMoonrise = dateMoonrise.getHours();
  const minutesMoonrise = dateMoonrise.getMinutes();
  // moonset
  const moonsetUnixTimestamp = dayData[0].moonset + data.timezone_offset - 3600;
  const dateMoonset = new Date(moonsetUnixTimestamp * 1000);
  const hoursMoonset = dateMoonset.getHours();
  const minutesMoonset = dateMoonset.getMinutes();
  // moon phase
  const moonphaseNum = dayData[0].moon_phase;
  let windDirection;
  let uvIndexCategory;
  let moonphase;

  const checkMoon = (num) => {
    if (num === 0 || num === 1) {
      return (moonphase = "New moon");
    } else if (num === 0.25) {
      return (moonphase = "First quarter moon");
    } else if (num === 0.5) {
      return (moonphase = "Full moon");
    } else if (num === 0.75) {
      return (moonphase = "Last quarter moon");
    } else if (num > 0 && num < 0.25) {
      return (moonphase = "Waxing crescent");
    } else if (num > 0.25 && num < 0.5) {
      return (moonphase = "Waxing gibous");
    } else if (num > 0.5 && num < 0.75) {
      return (moonphase = "Waning gibous");
    } else if (num > 0.75 && num < 1) {
      return (moonphase = "Waning crescent");
    }
  };

  if (
    (windDirectionDegree >= 337 && windDirectionDegree <= 360) ||
    windDirectionDegree <= 23
  ) {
    windDirection = "North";
  } else if (windDirectionDegree >= 24 && windDirectionDegree <= 68) {
    windDirection = "Northeast";
  } else if (windDirectionDegree >= 69 && windDirectionDegree <= 113) {
    windDirection = "East";
  } else if (windDirectionDegree >= 114 && windDirectionDegree <= 158) {
    windDirection = "Southeast";
  } else if (windDirectionDegree >= 159 && windDirectionDegree <= 203) {
    windDirection = "South";
  } else if (windDirectionDegree >= 204 && windDirectionDegree <= 248) {
    windDirection = "Southwest";
  } else if (windDirectionDegree >= 249 && windDirectionDegree <= 293) {
    windDirection = "West";
  } else if (windDirectionDegree >= 294 && windDirectionDegree <= 336) {
    windDirection = "Northwest";
  }

  if (uvIndex <= 2) {
    uvIndexCategory = "Low";
  } else if (uvIndex > 2 && uvIndex <= 5) {
    uvIndexCategory = "Medium";
  } else if (uvIndex > 5 && uvIndex <= 7) {
    uvIndexCategory = "High";
  } else if (uvIndex > 7 && uvIndex <= 10) {
    uvIndexCategory = "Very high";
  } else if (uvIndex > 10) {
    uvIndexCategory = "Extremely high";
  }

  return (
    <div className="all_details">
      <div className="details_container">
        <div className="box_img">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <p>{iconDescription}</p>
        </div>
        <div className="box_max_min">
          <p>
            {tempMax}
            <span>&#176;</span> <br />
            <span className="text_gray">Max</span>
          </p>
          <p>
            {tempMin}
            <span>&#176;</span> <br />
            <span className="text_gray">Min</span>
          </p>
        </div>
        <div>
          <p>
            {tempDay}
            <span>&#176;</span> <br /> <span className="text_gray">Day</span>
          </p>
          <p>
            {feelsDayTemp}
            <span>&#176;</span> <br />{" "}
            <span className="text_gray">Feels like</span>
          </p>
        </div>
        <div>
          <p>
            {tempNight}
            <span>&#176;</span> <br />
            <span className="text_gray">Night</span>
          </p>
          <p>
            {feelsNightTemp}
            <span>&#176;</span>
            <br /> <span className="text_gray">Feels like</span>
          </p>
        </div>
        <div>
          <p>
            {tempMorning}
            <span>&#176;</span> <br />
            <span className="text_gray">Morning</span>
          </p>
          <p>
            {feelsMornTemp}
            <span>&#176;</span> <br />{" "}
            <span className="text_gray">Feels like</span>
          </p>
        </div>
        <div>
          <p>
            {tempEve}
            <span>&#176;</span> <br />
            <span className="text_gray">Evening</span>
          </p>
          <p>
            {feelsEveTemp}
            <span>&#176;</span>
            <br /> <span className="text_gray">Feels like</span>
          </p>
        </div>
      </div>
      <div className="box_flex_details">
        <div className="details_container23">
          <p>
            {humidity} % <br /> <span className="text_gray">Humidity</span>
          </p>
          <p>
            {chanceOfPrecipitation} % <br />
            <span className="text_gray">Chance of precipitation</span>
          </p>
          <p>
            {pressure} mBar
            <br /> <span className="text_gray">Pressure</span>
          </p>
          <p>
            {uvIndexCategory}, {uvIndex} <br />
            <span className="text_gray">UV index</span>
          </p>
          <p>
            {windSpeed} m/s <br /> <span className="text_gray">Wind speed</span>
          </p>
          <p>
            From {windDirection} <br />
            <span className="text_gray">Wind direction</span>
          </p>
        </div>
        <div className="details_container23">
          <p>
            {hoursSunrise}h {minutesSunrise}m
            <br />
            <span className="text_gray">Sunrise</span>
          </p>
          <p>
            {hoursSunset}h {minutesSunset}m
            <br />
            <span className="text_gray">Sunset</span>
          </p>
          <p>
            {hoursMoonrise}h {minutesMoonrise}m
            <br />
            <span className="text_gray">Moonrise</span>
          </p>
          <p>
            {hoursMoonset}h {minutesMoonset}m
            <br />
            <span className="text_gray">Moonset</span>
          </p>
          <p>
            {checkMoon(moonphaseNum)}
            <br />
            <span className="text_gray">Moon phase</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
