import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./customTheme";

import LinkVote from "./pages/LinkVote.page";
import LinkAdd from "./pages/LinkAdd.page";
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
              <Route exact path="/" children={<LinkVote />} />
              <Route path="/add-link" children={<LinkAdd />} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
