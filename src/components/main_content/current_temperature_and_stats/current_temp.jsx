const CurrentTempAndStats = ({ data }) => {
  if (!!data === true && !!data.name === true) {
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    return (
      <div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div>
          <p>{temperature}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  } else if (data === "" || data.cod == 400) {
    return <p>Loading</p>;
  } else {
    const icon = data.current.weather[0].icon;
    const description = data.current.weather[0].description;
    const temperature = data.current.temp;
    return (
      <div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div>
          <p>{temperature}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default CurrentTempAndStats;
