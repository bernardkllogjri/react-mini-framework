import React from "react";
import { Cell, Column } from "./components";

const initColumns = columns => {
  const cols = [];
  for (let i = 0; i < columns; i++) {
    cols[i] = [];
  }
  return cols;
};

const wrapColumns = ({ children, columns }, gaps) => {
  const cols = initColumns(columns);
  const len = children ? children.length : 0;

  for (let i = 0; i < len; i++) {
    cols[i % columns].push(
      <Cell key={i} gaps={gaps}>
        {children[i]}
      </Cell>
    );
  }

  return cols;
};

export const renderMasonry = ({ gaps, ...props }) => {
  return wrapColumns(props, gaps).map((col, i) => (
    <Column key={i} gaps={gaps} index={i}>
      {col}
    </Column>
  ));
};
