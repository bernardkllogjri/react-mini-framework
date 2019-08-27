import styled from "styled-components";
import React from "react";

const Container = styled.div`
  cursor: pointer;
`;

const Icon = ({
  Icon,
  onClick = () => {
    console.log("here");
  }
}) => (
  <Container onClick={onClick}>
    <Icon size="medium" customColor="#3838388a" />
  </Container>
);

export { Icon };
