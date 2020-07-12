/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { getSemanticProps } from "@rjsf/semantic-ui/dist/util";
import CurrencyInput from "./CurrencyInput";
import { Form } from "semantic-ui-react";

function CurrencyWidget({
  id,
  required,
  readonly,
  disabled,
  name,
  label,
  schema,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  formContext,
}) {
  const semanticProps = getSemanticProps({ formContext, options });
  const _onChange = ({ target: { value } }) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = () => onBlur && onBlur(id, value);
  const _onFocus = () => onFocus && onFocus(id, value);
  return (
    <Form.Input
      key={id}
      id={id}
      type={schema.type}
      label={schema.title || label}
      required={required}
      autoFocus={autofocus}
      disabled={disabled || readonly}
      name={name}
      {...semanticProps}
      value={value || ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      children={<CurrencyInput />}
    />
  );
}

CurrencyWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true,
      inverted: false,
    },
  },
};

CurrencyWidget.propTypes = {
  options: PropTypes.object,
};

export default CurrencyWidget;
