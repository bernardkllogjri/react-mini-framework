import styled from "styled-components";
import React from "react";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
`;

const Icon = withRouter(({ Icon, onClick = () => {
    console.log("here");
  }, history, navigate }) => (
  <Container onClick={navigate ? () => history.push(navigate) : onClick}>
    <Icon size="medium" customColor="#3838388a" />
  </Container>
));

export { Icon };
