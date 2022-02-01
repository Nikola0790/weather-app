import { useSelector } from "react-redux";

const Header = ({ setCity, id }) => {
  let dayData;
  let unixTime;
  let makeDate;
  let monthSpec;
  let dateSpec;
  let dayNumSpec;

  const data = useSelector((state) => state.allData.data);
  const nameByGeo = useSelector((state) =>
    state.cityNameByCoordinates.data
      ? state.cityNameByCoordinates.data[0].name
      : null
  );
  let name = useSelector((state) => state.allDataByCityName.data.name);
  let country = useSelector((state) => state.allDataByCityName.data.country);

  if (id !== "") {
    dayData = data.daily.filter((item, index) => {
      if (index === id) {
        return item;
      }
    });
  }

  if (dayData !== undefined) {
    unixTime = dayData[0].dt;
    makeDate = new Date(unixTime * 1000);
    monthSpec = makeDate.getMonth() + 1;
    dateSpec = makeDate.getDate();
    dayNumSpec = makeDate.getDay();
  }

  const cityName = (event) => {
    if (event.key === "Enter") {
      setCity(event.target.value);

      // if we don't set "", we can't change the location name in the header
      /*  if (event.target.value === "") {
        name = "";
        country = "";
      } */
    }
  };

  const getDay = new Date().getDay();
  const getMonth = new Date().getMonth() + 1;
  const getDate = new Date().getDate();

  const month = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  const day = (day) => {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  };

  let coordinatesLatitude;
  let coordinatesLongitude;

  if (data) {
    if (data.lat < 0) {
      coordinatesLatitude = `${data.lat.toString().slice(1)} S`;
    } else {
      coordinatesLatitude = `${data.lat} N`;
    }

    if (data.lon < 0) {
      coordinatesLongitude = `${data.lon.toString().slice(1)} W`;
    } else {
      coordinatesLongitude = `${data.lon} E`;
    }
  }

  return (
    <header>
      <div className="locationAndDate grid">
        {data && name !== undefined ? (
          <p className="cityName">
            {name}, {country}
          </p>
        ) : (
          <p className="cityName">{nameByGeo}</p>
        )}
        {dayData !== undefined ? (
          <p>
            {day(dayNumSpec)} {dateSpec} {month(monthSpec)}
          </p>
        ) : (
          <p className="date">
            {day(getDay)} {getDate} {month(getMonth)}
          </p>
        )}
      </div>
      <div className="grid">
        <p className="lat_lon">
          Latitude: {coordinatesLatitude} <br /> Longitude:
          {coordinatesLongitude}
        </p>
      </div>
      <div className="searchBox grid">
        <input type="text" placeholder="City name" onKeyPress={cityName} />
      </div>
    </header>
  );
};

export default Header;
