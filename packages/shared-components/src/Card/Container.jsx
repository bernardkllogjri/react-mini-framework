import styled from "styled-components";

export default styled.div`
  ${({ spacing }) => (spacing ? `margin-top:${spacing}px` : "")}
  background: white;
  box-shadow: 0px 0px 19px #0000002e;
  ${({ clickable }) => (clickable ? `cursor:pointer;` : "")}
`;
