const NextSevenDays = ({ data }) => {
  console.log(data);
  return (
    <div className="next_7_container">
      <p>Next 7 days</p>
      {data.daily.map((item, index) => {
        if (index !== 0) {
          const unixTime = item.dt;
          const makeDate = new Date(unixTime * 1000);
          const month = makeDate.getMonth() + 1;
          const date = makeDate.getDate();
          const dayNum = makeDate.getDay();
          const icon = item.weather[0].icon;
          const minTemp = Math.round(item.temp.min);
          const maxTemp = Math.round(item.temp.max);
          const windSpeed = item.wind_speed;
          const uvIndex = Math.round(item.uvi);
          const chancePrecipitation = Math.round(item.pop * 100);
          const day = (day) => {
            switch (day) {
              case 0:
                return "Sun";
              case 1:
                return "Mon";
              case 2:
                return "Tue";
              case 3:
                return "Wed";
              case 4:
                return "Thur";
              case 5:
                return "Fri";
              case 6:
                return "Sat";
            }
          };

          return (
            <div className="next_7">
              <div>
                <p>
                  {day(dayNum)} <br /> {date}/{month}
                </p>
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="img"
                />
              </div>
              <div>
                <p>
                  {minTemp}
                  <span>&#176;</span> <br /> Low
                </p>
              </div>
              <div>
                <p>
                  {maxTemp}
                  <span>&#176;</span> <br /> High
                </p>
              </div>
              <div>
                <p>
                  {chancePrecipitation} % <br /> Precipitation
                </p>
              </div>
              <div>
                <p>
                  {windSpeed} m/s <br /> Wind
                </p>
              </div>
              <div>
                <p>
                  {uvIndex} <br /> UV index
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NextSevenDays;
