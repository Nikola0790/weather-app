import { getAllDataByGeolocation } from "../service/all_weather_data_onecall/service_all_weather_data_onecall";
import {
  getCurrentDataByCityName,
  getCurrentDataByGeoCoordinates,
} from "../service/current_weather_data/service_current_weather_data";
import { getAirPollutionData } from "../service/air_pollution_data/airPollution";
import {
  getCordinatesByLocationName,
  getLocationNameByCordinates,
} from "../service/geocoding_api/service_geo_data";

describe("services test", () => {
  function setupFetchStub(data) {
    return function fetchStub(_url) {
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              data,
            }),
        });
      });
    };
  }

  function testArguments(a, b, somefn) {
    somefn(a, b);
  }

  function testCityArgument(a, somefn) {
    somefn(a);
  }

  const fakeData = { fake: "data" };

  test("by city name and geolocation", async () => {
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData));

    const dataByCity = await getCurrentDataByCityName("London");
    const dataByGeolocation = await getAllDataByGeolocation(25, 50);

    expect(dataByCity).toEqual({ data: fakeData });
    expect(dataByGeolocation).toEqual({ data: fakeData });
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(2);
    expect.assertions(4);
    global.fetch.mockClear();
  });

  test("by geo coordinates, location name and location by coordinates", async () => {
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData));
    const dataByGeocoordinates = await getCurrentDataByGeoCoordinates(78, 105);
    const coordinatesByLocationName = await getCordinatesByLocationName(
      "Paris"
    );
    const locationByCoordinates = await getLocationNameByCordinates(150, 169);
    const mockSomeFn = jest.fn(getCordinatesByLocationName);

    expect.assertions(2);
    testCityArgument("Paris", mockSomeFn);
    expect(mockSomeFn).toHaveBeenCalledWith("Paris");
    expect(fetch).toHaveBeenCalledTimes(4);

    global.fetch.mockClear();
  });

  test("air pollution data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData));

    const airPollutionData = await getAirPollutionData(18, 36);
    const mockSomeFn = jest.fn(getAirPollutionData);
    testArguments(15, 36, mockSomeFn);

    expect(fetch).toHaveBeenCalled();
    expect(airPollutionData.data).toBe(fakeData);
    expect(airPollutionData).toEqual(
      expect.objectContaining({ data: { fake: "data" } })
    );
    expect(mockSomeFn).toHaveBeenCalledWith(15, 36);

    global.fetch.mockClear();
  });
});
