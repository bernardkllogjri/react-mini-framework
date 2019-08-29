import styled from "styled-components";

const DEFAULT_GAP_SIZE = 10;

export const Cell = styled.div`
  margin-bottom: ${({ gaps }) => gaps || DEFAULT_GAP_SIZE}px;
`;
export const Column = styled.div`
  margin-left: ${({ gaps, index }) =>
    index > 0 ? gaps || DEFAULT_GAP_SIZE : 0}px
  flex: 1
`;
