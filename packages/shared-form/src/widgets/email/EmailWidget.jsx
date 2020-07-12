/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { getSemanticProps } from "@rjsf/semantic-ui/dist/util";
import { Form } from "semantic-ui-react";

function EmailWidget({
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
  ...props
}) {
  console.log(props);
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
      // error={{}}
    />
  );
}

EmailWidget.defaultProps = {
  options: {
    semantic: {
      fluid: true,
      inverted: false,
    },
  },
};

EmailWidget.propTypes = {
  options: PropTypes.object,
};

export default EmailWidget;
