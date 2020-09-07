import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../store/linkList/linkSlice";
import paginationSliceReducer from "../store/pagination/paginationSlice";
import { loadState } from "./localStorage";

const preloadedState = loadState();
export default configureStore({
  reducer: {
    linkList: linkReducer,
    pagination: paginationSliceReducer,
  },
  preloadedState,
});
