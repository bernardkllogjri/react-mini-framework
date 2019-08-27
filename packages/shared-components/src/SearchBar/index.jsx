import React, { useReducer } from "react";
import AsyncSelect from "react-select/async";
import { Mock } from "shared-api";

const loadOptions = (inputValue, callback) => {
  Mock.all(inputValue).then(res => {
    callback(res.data.data.map(d => ({ label: d.title })));
  });
};

const handleInputChange = newValue => {
  const inputValue = newValue;
  return inputValue;
};

const initialState = {
  inputValue: ""
};

const reducer = (_, { type, payload }) => {
  switch (type) {
    case "change":
      return { initialState: handleInputChange(payload) };
    default:
      return;
  }
};

const SearchBar = () => {
  const [_, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ width: "80%" }}>
      <AsyncSelect
        components={{ DropdownIndicator: null }}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={val => dispatch({ type: "change", payload: val })}
      />
    </div>
  );
};

export { SearchBar };
