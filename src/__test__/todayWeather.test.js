import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render as rtlRender, screen } from "@testing-library/react";
import TodayWeather from "../components/main_content/weather_by_hour/todayWeather";
import { state, stateWithEmptyData } from "./mockStore/mockStore";
import "@testing-library/jest-dom";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const render = (component, state) => {
  rtlRender(<Provider store={mockStore(() => state)}>{component}</Provider>);
};

describe("TodayWeather", () => {
  test("should render component", async () => {
    render(<TodayWeather screen={1200} />, state);
    const todayWeatherParagraph = await screen.findByText("Todays weather");
    const todayWeather = screen.getByTestId("test-2");
    const ancestor = screen.getByTestId("test-ancestor");
    const descendant = screen.getByTestId("test-descendant");
    expect.assertions(4);
    expect(todayWeather).toBeInTheDocument();
    expect(todayWeatherParagraph).toBeInTheDocument();
    expect(ancestor).toContainElement(descendant);
    expect(ancestor).toHaveClass("small_box_weather");
  });
  test("sholud render component when data is empty array", () => {
    render(<TodayWeather screen={1200} />, stateWithEmptyData);
    const todayWeather = screen.getByTestId("test-3");
    expect(todayWeather).toBeInTheDocument();
    expect(todayWeather).toBeDefined();
    expect(todayWeather).toHaveTextContent("Loading");
  });
});
