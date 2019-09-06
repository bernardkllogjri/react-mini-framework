import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Search } from "@kiwicom/orbit-components/lib/icons";
import { InputField, ListChoice } from "@kiwicom/orbit-components/";

const ListOption = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1024;
  border: 1px solid #bac7d5;
  border-top: 0;
`;
const SearchContainer = styled.div`
  width: 80%;
  position: relative;
`;

const Input = props => <InputField prefix={<Search />} {...props} />;
const Option = withRouter(({ history, _id, title, desc }) => (
  <ListChoice
    title={title}
    description={desc}
    onClick={() =>
      history.replace({
        pathname: "/post",
        state: { _id }
      })
    }
  />
));
const List = ({ data }) =>
  data.length ? (
    <ListOption>
      {data.map(post => (
        <Option key={post._id} {...post} />
      ))}
    </ListOption>
  ) : null;

export { Input, List, SearchContainer };
