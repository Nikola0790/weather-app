const TodaysWeather = ({ data, screen }) => {
  if (data === "" || data.cod == 400) {
    return <p>Loading</p>;
  }

  const listOfData = data.list;

  if (screen < 769) {
    return (
      <div className="box_todays_weather">
        <p>Todays weather</p>
        <div className="order_box">
          {listOfData.map((item, index) => {
            if (index < 5) {
              let icon = item.weather[0].icon;
              let temp = Math.round(item.main.temp);
              let dateTime = item.dt_txt;
              let time = dateTime.split(" ")[1].split(":")[0];
              return (
                <div className="small_box_weather" key={index}>
                  <p>{time} h</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt=""
                  />
                  <p>
                    {temp}
                    <span>&#176;</span>
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="box_todays_weather">
      <p>Todays weather</p>
      <div className="order_box">
        {listOfData.map((item, index) => {
          if (index < 7) {
            let icon = item.weather[0].icon;
            let temp = Math.round(item.main.temp);
            let dateTime = item.dt_txt;
            let time = dateTime.split(" ")[1].split(":")[0];
            return (
              <div className="small_box_weather" key={index}>
                <p>{time} h</p>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
                <p>
                  {temp} <span>&#176;</span>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodaysWeather;
