import React from "react";
import { theme } from "init";
import pages from "./pages";
import ReactDOM from "react-dom";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { pageRenderer } from "shared-utils";
import withSockets from "shared-sockets";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "shared-reducers";

const store = createStore(reducer);

const Root = withSockets(() => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>{pages.map((page, index) => pageRenderer(page, index))}</Switch>
    </Router>
  </ThemeProvider>
));

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
