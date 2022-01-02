const Header = ({ setCity, data }) => {
  const cityName = (event) => {
    if (event.key === "Enter") {
      setCity(event.target.value);
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

  if (data.name) {
    if (data.coord.lat < 0) {
      coordinatesLatitude = `${data.coord.lat.toString().slice(1)} S`;
    } else {
      coordinatesLatitude = `${data.coord.lat} N`;
    }

    if (data.coord.lon < 0) {
      coordinatesLongitude = `${data.coord.lon.toString().slice(1)} W`;
    } else {
      coordinatesLongitude = `${data.coord.lon} E`;
    }
  }

  return (
    <header>
      <div className="locationAndDate">
        {data.name ? (
          <p className="cityName">
            {data.name}, {data.sys.country}
          </p>
        ) : (
          <p className="lat_lon">
            Latitude: {data.lat}, Longitude: {data.lon}
          </p>
        )}
        <p className="date">
          {day(getDay)} {getDate} {month(getMonth)}
        </p>
      </div>
      <div>
        {data.name ? (
          <p className="lat_lon">
            Latitude: {coordinatesLatitude}, Longitude: {coordinatesLongitude}
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="searchBox">
        <input type="text" placeholder="City name" onKeyPress={cityName} />
      </div>
    </header>
  );
};

export default Header;
