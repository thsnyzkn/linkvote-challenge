import React from "react";
import { render } from "./custom-render";
import { Provider } from "react-redux";

import store from "./app/store";
import App from "./App";

test("renders application name", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText(/LinkVote/i)).toBeInTheDocument();
});
