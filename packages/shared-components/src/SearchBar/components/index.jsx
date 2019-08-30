import { InputField } from "@kiwicom/orbit-components/";
import { Search } from "@kiwicom/orbit-components/lib/icons";
import { components } from "react-select";
import React from "react";
import { withRouter } from "react-router";

const { Option: SelectOption } = components;

export const Input = props => {
  return <InputField prefix={<Search />} {...props} />;
};

export const Option = withRouter(({ history, ...props }) => {
  return (
    <div
      onClick={() =>
        history.replace({
          pathname: "/post",
          state: {
            _id: `_id_${Math.random()}`
          }
        })
      }
    >
      <SelectOption {...props} />
    </div>
  );
});
