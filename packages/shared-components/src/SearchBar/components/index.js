import { InputField } from "@kiwicom/orbit-components/";
import { Search } from "@kiwicom/orbit-components/lib/icons";
import React from "react";

export const Input = props => {
  return <InputField prefix={<Search />} {...props} />;
};
