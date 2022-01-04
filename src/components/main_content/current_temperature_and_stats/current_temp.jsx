const CurrentTempAndStats = ({ data }) => {
  if (data === "" || data.cod == 400) {
    return <p>Loading</p>;
  } else {
    const icon = data.current.weather[0].icon;
    const description = data.current.weather[0].description;
    const temperature = data.current.temp;
    const feelsLike = data.current.feels_like;
    const sunriseUnixTimestamp = data.current.sunrise;
    const sunsetUnixTimestamp = data.current.sunset;
    let dateSunrise = new Date(sunriseUnixTimestamp * 1000);
    let dateSunset = new Date(sunsetUnixTimestamp * 1000);
    let hoursSunrise = dateSunrise.getHours();
    let minutesSunrise = dateSunrise.getMinutes();
    let secondsSunrise = dateSunrise.getSeconds();
    let hoursSunset = dateSunset.getHours();
    let minutesSunset = dateSunset.getMinutes();
    let secondsSunset = dateSunset.getSeconds();

    return (
      <>
        <div className="current_data">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather icon"
            />
            <p>{description}</p>
          </div>
          <div>
            <p>{temperature}</p>
            <p>Feels like {feelsLike}</p>
          </div>
        </div>
        <div className="data_for_all_day">
          <div>
            <p>{data.daily[0].temp.max}</p>
            <p>Max</p>
          </div>
          <div>
            <p>{data.daily[0].temp.min}</p>
            <p>Min</p>
          </div>
          <div>
            <p>{data.current.wind_speed}</p>
            <p>Wind speed</p>
          </div>
          <div>
            <p>{data.daily[0].pop * 100} %</p>
            <p>Chance of precipitation</p>
          </div>
          <div>
            <p>
              {hoursSunrise}h:{minutesSunrise}m:{secondsSunrise}s
            </p>
            <p>Sunrise</p>
          </div>
          <div>
            <p>
              {hoursSunset}h:{minutesSunset}m:{secondsSunset}s
            </p>
            <p>Sunset</p>
          </div>
        </div>
      </>
    );
  }
};

export default CurrentTempAndStats;
