import React from "react";
import { renderMasonry } from "./utils";

export const Masonry = props => {
  return <div style={{ display: "flex" }}>{renderMasonry(props)}</div>;
};
