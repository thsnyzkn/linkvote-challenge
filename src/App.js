import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./customTheme";

import LinksList from "./features/linkList/LinkList";
import AddLink from "./features/linkAdd/AddLink";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      {" "}
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <div>
          <Router>
            <Switch>
              <Route exact path="/" children={<LinksList />} />
              <Route path="/add-link" children={<AddLink />} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
