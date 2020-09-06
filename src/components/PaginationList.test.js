import React from "react";
import { render, fireEvent, screen } from "../custom-render";
import { useSelector } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import PaginationList from "./PaginationList";
import {
  selectPages,
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "../features/pagination/paginationSlice";
/* const pagination = useSelector(selectPages); */
test("can render with redux with defaults", () => {
  render(
    <PaginationList
      sortedList={[
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
        {
          id: "6b1036ec-168b-4fb3-9d3f-1c7afeff7e1c",
          points: 3,
          title: "Stack Overflow",
          url: "http://tahsinyazkan.dev",
          createdDate: "2020-09-06T14:01:04.741Z",
          updatedDate: "2020-09-06T15:33:43.536Z",
        },
      ]}
      currentPage={1}
      goPrevPage={goPrevPage}
      goClickedPage={goClickedPage}
      goNextPage={goNextPage}
    />
  );
  /* fireEvent.click(screen.getByText("<")); */
  expect(screen.getByText(1).toBeInTheDocument());
});