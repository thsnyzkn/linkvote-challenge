import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/linkList/linkSlice";

export default configureStore({
  reducer: {
    linkList: linkReducer,
  },
});
