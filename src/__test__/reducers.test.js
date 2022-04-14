import reducerAllData from "../redux/allData/allDataReducer";
import reducerAllDataByCityName from "../redux/allDataByCityName/allDataByCityNameReducer";
import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
} from "../redux/allData/allDataTypes";
import {
  ALL_DATA_BY_CITY_NAME_REQUEST,
  ALL_DATA_BY_CITY_NAME_SUCCESS,
  ALL_DATA_BY_CITY_NAME_FAILURE,
} from "../redux/allDataByCityName/allDataByCityNameTypes";

let initialState = {
  loading: false,
  data: [],
  error: "",
};

describe("test reducerAllData", () => {
  test("type request", () => {
    const request = reducerAllData(
      { loading: false, data: [], error: "" },
      {
        type: DATA_REQUEST,
      }
    );
    expect(true).toBe(request.loading);
  });

  test("type success", () => {
    const success = reducerAllData(
      { loading: true, data: [], error: "" },
      { type: DATA_SUCCESS }
    );
    expect(false).toBe(success.loading);
    expect(success.error).toBe("");
  });

  test("type failure", () => {
    const failure = reducerAllData(
      { loading: true, data: [], error: "" },
      { type: DATA_FAILURE, payload: "404 not found" }
    );
    expect(false).toBe(failure.loading);
    expect("404 not found").toBe(failure.error);
  });
});

describe("test reducerAllDataByCityName", () => {
  test("type request", () => {
    const request = reducerAllDataByCityName(initialState, {
      type: ALL_DATA_BY_CITY_NAME_REQUEST,
    });
    expect(true).toBe(request.loading);
  });
  test("type success", () => {
    const success = reducerAllDataByCityName(initialState, {
      type: ALL_DATA_BY_CITY_NAME_SUCCESS,
      payload: "new data",
    });
    expect(false).toBe(success.loading);
    expect("new data").toBe(success.data);
  });
  test("type failure", () => {
    const failure = reducerAllDataByCityName(initialState, {
      type: ALL_DATA_BY_CITY_NAME_FAILURE,
      payload: "not found",
    });
    expect("404 not found").toMatch(failure.error);
  });
});
