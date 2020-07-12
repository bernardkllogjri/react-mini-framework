import React, { useState } from "react";
import JSONForm from "@rjsf/semantic-ui";
import { Button } from "semantic-ui-react";

import widgets from "./widgets";

const useForm = (submitted, schema, uiSchema = {}) => {
  const [isFormSubmitting, setFormSubmitting] = useState(false);

  const onSubmit = (data, e) => {
    setFormSubmitting(true);
    submitted(data, setFormSubmitting, e);
  };

  const Form = ({ submitLabel, ...props }) => {
    return (
      <JSONForm
        liveValidate={true}
        widgets={widgets}
        onSubmit={(data, _event) => onSubmit(data, _event)}
        schema={schema}
        uiSchema={uiSchema}
        {...props}
      >
        <Button type="submit">{submitLabel || "Submit"}</Button>
      </JSONForm>
    );
  };

  return [isFormSubmitting, setFormSubmitting, Form];
};

export default useForm;
