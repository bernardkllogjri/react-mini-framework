import { Auth } from "./";
import React from "react";

export const withAuth = Comp => {
  class AuthService extends React.Component {
    constructor(props) {
      super(props);
      this.state = { token: Auth.token() };
    }
    render() {
      return <Comp auth={this.state.token} {...this.props} />;
    }
  }
  return AuthService;
};
