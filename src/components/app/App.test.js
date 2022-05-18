import { render, screen } from "@testing-library/react";
import exp from "constants";
import App from "./App";

test("render app", () => {
  render(<App />);
  screen.debug;
  const footer = screen.findByTestId("footer");
  expect(footer).toBeInTheDocument;
});
