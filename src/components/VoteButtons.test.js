import React from "react";
import { render, fireEvent, screen } from "../custom-render";
import "@testing-library/jest-dom/extend-expect";
import VoteButtons from "./VoteButtons";

test("can render with redux with defaults", () => {
  render(<VoteButtons />);
  /* fireEvent.click(screen.getByText("<")); */
  expect(screen.getByTestId("page-value")).toHaveTextContent("1");
});
