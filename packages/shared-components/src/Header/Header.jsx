import styled from "styled-components";

export default styled.div`
  background-color: #333;
  height: 60px;
  vertical-align: middle;
  padding: 10px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  ul {
    display: flex;
    flex-direction: row;
    li {
      padding: 10px;
      list-style: none;
    }
  }
  a {
    color: white;
    text-decoration: none !important;
    &:hover {
      opacity: 0.7;
    }
  }
`;
