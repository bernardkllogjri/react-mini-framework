import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 0 30%;
  height: 100%;
  ${props =>
    props.centered &&
    css`
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export { Container };
