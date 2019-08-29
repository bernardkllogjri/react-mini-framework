import React from "react";
import { Redirect } from "react-router-dom";

export default class Guard {
  constructor(auth, props, C) {
    this.redirects = {
      auth: "/login",
      guest: "/"
    };
    this.auth_check = auth;
    this.props = props;
    this.C = C;
    this.next = this.next.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  next() {
    const Component = this.C;
    return () => <Component {...this.props} />;
  }
  goTo(to) {
    return () => (
      <Redirect
        to={{
          pathname: this.redirects[to],
          state: {
            from: this.props.location
          }
        }}
      />
    );
  }
  auth() {
    const { next, goTo, auth_check } = this;
    return auth_check ? next() : goTo("auth");
  }

  guest() {
    const { next, goTo, auth_check } = this;
    return auth_check ? goTo("guest") : next();
  }
}
