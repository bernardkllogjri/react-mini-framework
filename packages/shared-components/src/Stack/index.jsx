import React from "react";
import { Stack as OrbitStack } from "@kiwicom/orbit-components";

export const Stack = ({ centered, children }) => (
  <OrbitStack {...(centered ? { justify: "center" } : {})}>
    {centered
      ? children.map((child, i) => (
          <div key={i} style={{ width: "50%" }}>
            {child}
          </div>
        ))
      : children}
  </OrbitStack>
);
