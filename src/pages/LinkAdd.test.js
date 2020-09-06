import React from "react";
import { render, fireEvent, screen } from "../custom-render";
import "@testing-library/jest-dom/extend-expect";
import LinkAdd from "./LinkAdd.page";

test("can render with redux with defaults", () => {
  render(<LinkAdd />);
  expect(screen.getByText("Link URL:")).toBeInTheDocument();
});
