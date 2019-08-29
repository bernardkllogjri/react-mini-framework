import React from "react";
import Guard from "./Guard";
import types from "./types";
import { withAuth } from "unsplash-client-auth";

const Guarded = ({ auth, component: Component, middleware, ...props }) => {
  const guard = new Guard(auth, props, Component);
  if (!types.includes(middleware)) {
    throw new Error(`Middleware ${middleware} doesn't exist`);
  }
  const View = guard[middleware]();
  return <View />;
};

export default withAuth(Guarded);
