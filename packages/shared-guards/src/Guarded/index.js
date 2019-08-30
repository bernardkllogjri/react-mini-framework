import React from "react";
import Guard from "./Guard";
import types from "./types";

export default ({ auth, component: Component, middleware, ...props }) => {
  const guard = new Guard(auth, props, Component);
  if (!types.includes(middleware)) {
    throw new Error(`Middleware ${middleware} doesn't exist`);
  }
  const View = guard[middleware]();
  return <View />;
};
