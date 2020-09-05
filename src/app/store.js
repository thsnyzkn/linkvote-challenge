import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/linkList/linkSlice";
import paginationSliceReducer from "../features/pagination/paginationSlice";
import { loadState } from "./localStorage";

const preloadedState = loadState();
export default configureStore({
  reducer: {
    linkList: linkReducer,
    pagination: paginationSliceReducer,
  },
  preloadedState,
});
