import CurrentTempAndStats from "../current_temperature_and_stats/current_temp";
import TodaysWeather from "../weather_by_hour/todayWeather";
import NextSevenDays from "../next_7_days/next_7_days";

const AllComponets = ({ data, dataNext5Days, screenWidth }) => {
  return (
    <>
      <CurrentTempAndStats data={data} />
      <TodaysWeather data={dataNext5Days} screen={screenWidth} />
      <NextSevenDays data={data} screen={screenWidth} />
    </>
  );
};
export default AllComponets;
