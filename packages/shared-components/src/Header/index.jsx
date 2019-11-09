import React from "react";
import StyledHeader from "./Header";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <StyledHeader>
    <NavLink to="/">Bash Frameworku !</NavLink>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  </StyledHeader>
);
