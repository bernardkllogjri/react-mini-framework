import Guarded from "shared-guards";
import React from "react";
import { Route } from "react-router-dom";

export default ({ path, view, middleware }, index) =>
  middleware ? (
    <Guarded
      key={index}
      exact
      path={path}
      component={view}
      middleware={middleware}
    />
  ) : (
    <Route key={index} exact path={path} component={view} />
  );
