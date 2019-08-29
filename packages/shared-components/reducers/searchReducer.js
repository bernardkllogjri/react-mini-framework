import { SEARCH as TYPES } from "../types";

const handleInputChange = newValue => {
  const inputValue = newValue;
  return inputValue;
};

export const searchReducer = (_, { type, payload }) => {
  switch (type) {
    case TYPES.CHANGE:
      return { initialState: handleInputChange(payload) };
    default:
      return;
  }
};
