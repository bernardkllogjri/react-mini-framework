import { Field } from "formik";
import { Text } from "@kiwicom/orbit-components";
import { InputField } from "@kiwicom/orbit-components";
import React from "react";

const CustomField = ({ field, form: { touched, errors }, ...rest }) => (
  <div>
    <InputField type="text" {...field} {...rest} />
    {touched[field.name] && errors[field.name] && (
      <Text type="critical">{errors[field.name]}</Text>
    )}
  </div>
);

export const Input = props => (
  <Field label={props.name} {...props} component={CustomField} />
);
