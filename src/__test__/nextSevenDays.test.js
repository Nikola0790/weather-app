import { Provider } from "react-redux";
import { render as rtlRender, screen } from "@testing-library/react";
import NextSevenDays from "../components/main_content/next_7_days/next_7_days";
import configureMockStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

let state = {
  allData: {
    loading: false,
    data: {
      daily: [
        {
          dt: 1649066400,
          temp: { min: -0.21, max: 10.06 },
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
    error: "",
  },
};

const render = (component, state) => {
  rtlRender(<Provider store={mockStore(() => state)}>{component}</Provider>);
};

describe("NextSevenDays component", () => {
  test("should render NextSevenDays component", () => {
    render(<NextSevenDays screen={1200} setNum={5} />, state);
    const sevenDays = screen.getByTestId("test-1");
    expect(sevenDays).toBeDefined();
  });
});
