import React from "react";
import { render, screen } from "../custom-render";
import "@testing-library/jest-dom/extend-expect";
import LinkAdd from "./LinkAdd.page";

test("can render form label", () => {
  render(<LinkAdd />);
  expect(screen.getByText("Link URL:")).toBeInTheDocument();
});

test("can render with redux with defaults", () => {
  render(<LinkAdd />);
  expect(screen.getByText(/Add/i)).toBeInTheDocument();
});
