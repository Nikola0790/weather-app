const CurrentTempAndStats = ({ data, airData }) => {
  if (data === "" || data.cod == 400) {
    return <p>Loading</p>;
  } else {
    const icon = data.current.weather[0].icon;
    const description = data.current.weather[0].description;
    const temperature = Math.round(data.current.temp);
    const feelsLike = Math.round(data.current.feels_like);
    const maxTemp = Math.round(data.daily[0].temp.max);
    const minTemp = Math.round(data.daily[0].temp.min);
    const windSpeed = data.current.wind_speed;
    const chancePrecipitation = Math.round(data.daily[0].pop * 100);
    const uvIndex = Math.round(data.current.uvi);
    let uvIndexCategory;
    const humidity = data.current.humidity;
    const sunriseUnixTimestamp =
      data.current.sunrise + data.timezone_offset - 3600;
    const sunsetUnixTimestamp =
      data.current.sunset + data.timezone_offset - 3600;
    let dateSunrise = new Date(sunriseUnixTimestamp * 1000);
    let dateSunset = new Date(sunsetUnixTimestamp * 1000);
    let hoursSunrise = dateSunrise.getHours();
    let minutesSunrise = dateSunrise.getMinutes();
    let secondsSunrise = dateSunrise.getSeconds();
    let hoursSunset = dateSunset.getHours();
    let minutesSunset = dateSunset.getMinutes();
    let secondsSunset = dateSunset.getSeconds();
    const airPollutionIndex = airData.list[0].main.aqi;
    let airPollutionDescription;

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

    switch (airPollutionIndex) {
      case 1:
        airPollutionDescription = "Good";
        break;
      case 2:
        airPollutionDescription = "Fair";
        break;
      case 3:
        airPollutionDescription = "Moderate";
        break;
      case 4:
        airPollutionDescription = "Poor";
        break;
      case 5:
        airPollutionDescription = "Hazardous";
        break;
    }

    return (
      <div className="box_weather_data_and_stats">
        <div className="current_data">
          <div className="left_box">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
              />
              <p>{description}</p>
            </div>
          </div>
          <div className="right_box">
            <div>
              <p>
                {temperature}
                <span>&#176;</span>
              </p>
              <p>
                Feels like {feelsLike}
                <span>&#176;</span>
              </p>
            </div>
          </div>
          <div className="airPollution">
            <div>
              <p>{airPollutionDescription}</p>
              <p>Air quality</p>
            </div>
          </div>
        </div>
        <div className="data_for_all_day">
          <div className="box_flex">
            <div>
              <p className="data_fs">
                {maxTemp}
                <span>&#176;</span>
              </p>
              <p>Max</p>
            </div>
            <div>
              <p className="data_fs">
                {minTemp}
                <span>&#176;</span>
              </p>
              <p>Min</p>
            </div>
          </div>
          <div className="box_flex">
            <div>
              <p className="data_fs">
                {uvIndexCategory}, {uvIndex}
              </p>
              <p>UV index</p>
            </div>
            <div>
              <p className="data_fs">{chancePrecipitation} %</p>
              <p>Chance of precipitation</p>
            </div>
          </div>
          <div className="box_flex">
            <div>
              <p className="data_fs">{windSpeed} m/s</p>
              <p>Wind speed</p>
            </div>
            <div>
              <p className="data_fs">{humidity} %</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="box_flex">
            <div>
              <p className="data_fs">
                {hoursSunrise}h {minutesSunrise}m {/* {secondsSunrise}s */}
              </p>
              <p>Sunrise</p>
            </div>
            <div>
              <p className="data_fs">
                {hoursSunset}h {minutesSunset}m {/* {secondsSunset}s */}
              </p>
              <p>Sunset</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentTempAndStats;
