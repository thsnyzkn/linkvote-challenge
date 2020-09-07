import React from "react";
import { render, screen } from "../custom-render";
import "@testing-library/jest-dom/extend-expect";
import ScoreBox from "./ScoreBox";

test("can render with given points value correctly", () => {
  render(<ScoreBox points={10} />);

  expect(screen.getByTestId("points-value")).toHaveTextContent("10");
});

test("can render Text content of POINTS", () => {
  render(<ScoreBox points={10} />);

  expect(screen.getByText(/POINTS/i)).toBeInTheDocument();
});
