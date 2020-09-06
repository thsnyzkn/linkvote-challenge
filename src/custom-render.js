import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Provider } from "react-redux";
import store from "./app/store";
import {
  reducer,
  initialState as reducerInitialState,
} from "./features/linkList/linkSlice";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CSSReset />
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
