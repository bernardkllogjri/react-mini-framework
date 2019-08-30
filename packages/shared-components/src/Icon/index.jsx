import styled from "styled-components";
import React from "react";

const Container = styled.div`
  cursor: pointer;
`;

export default ({ Icon, onClick = () => {}, history, navigate }) => (
  <Container onClick={navigate ? () => history.push(navigate) : onClick}>
    <Icon size="medium" customColor="#3838388a" />
  </Container>
);
