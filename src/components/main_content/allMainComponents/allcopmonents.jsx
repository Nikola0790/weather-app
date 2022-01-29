import CurrentTempAndStats from "../current_temperature_and_stats/current_temp";
import TodaysWeather from "../weather_by_hour/todayWeather";
import NextSevenDays from "../next_7_days/next_7_days";

const AllComponets = ({ screenWidth, setDay, resetId }) => {
  // reset id num when we are on main page and date is right.
  resetId("");
  return (
    <>
      <CurrentTempAndStats />
      <TodaysWeather screen={screenWidth} />
      <NextSevenDays screen={screenWidth} setNum={setDay} />
    </>
  );
};
export default AllComponets;
