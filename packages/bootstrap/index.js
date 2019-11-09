import React from "react";
import pages from "./pages";
import { theme } from "init";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "shared-reducers";
import { Provider } from "react-redux";
import withSockets from "shared-sockets";
import { pageRenderer } from "shared-utils";
import { ThemeProvider } from "styled-components";
import { Header, Wrapper } from "shared-components";
import { Switch, BrowserRouter as Router, NavLink } from "react-router-dom";
const store = createStore(reducer);

const Root = withSockets(() => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Wrapper>
        <Switch>{pages.map((page, index) => pageRenderer(page, index))}</Switch>
      </Wrapper>
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
