import { Input, List, SearchContainer } from "../components";
import React, { useState, useEffect } from "react";
import SearchService from "../service";

const searchService = new SearchService();

const SearchBar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    searchService.subscribe(result => setData(result));
    return () => {
      searchService.unsubscribe();
    };
  }, []);
  return (
    <SearchContainer>
      <Input onChange={e => searchService.pushTerm(e.target.value)} />
      <List data={data} />
    </SearchContainer>
  );
};

export default SearchBar;
