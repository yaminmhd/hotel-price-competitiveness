import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("renders learn react title", () => {
    render(<App />);

    screen.debug();
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
