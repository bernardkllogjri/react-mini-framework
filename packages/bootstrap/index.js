import React from "react";
import { theme } from "../../init";
import pages from "./pages";
import ReactDOM from "react-dom";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {pages.map((page, index) => (
          <Route key={index} exact path={page.path} component={page.view} />
        ))}
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
