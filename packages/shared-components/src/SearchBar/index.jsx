import React from "react";
import AsyncSelect from "react-select/async";
import { Mock } from "shared-api";
import { Input } from "./components";

const loadOptions = (inputValue, callback) => {
  Mock.all(inputValue).then(res => {
    callback(res.data.data.map(d => ({ label: d.title })));
  });
};

const SearchBar = () => {
  return (
    <div style={{ width: "80%" }}>
      <AsyncSelect
        components={{
          DropdownIndicator: null,
          Input
        }}
        classNamePrefix="unsplash__client"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
      />
    </div>
  );
};

export { SearchBar };
