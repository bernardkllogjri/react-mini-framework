import React from "react";
import { Header } from "shared-components";
import { Wrapper } from "./styles";

export default ({ children, noHeader }) => (
  <Wrapper>
    {!noHeader && <Header />}
    {children}
  </Wrapper>
);
