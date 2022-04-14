export const state = {
  nextSevenDaysData: {
    data: {
      list: [
        {
          dt_txt: "16490 664:00",
          main: { temp: 10.06 },
          wind_speed: 3.01,
          uvi: 4,
          pop: 0,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
        },
      ],
    },
  },
};

export const stateWithEmptyData = {
  nextSevenDaysData: {
    loading: false,
    data: [],
    error: "",
  },
};

export const stateWithError = {
  allData: {
    loading: false,
    data: [],
    error: "Some error message",
  },
};
