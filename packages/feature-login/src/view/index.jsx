import React from "react";
import { User } from "shared-api";
import { Auth } from "shared-auth";
import { Grid, Segment, Loader, Dimmer } from "semantic-ui-react";
import useForm from "shared-form";

import { schema, uiSchema } from "./loginSchema";

export default ({ history }) => {
  const [isFormSubmitting, setFormSubmitting, Form] = useForm(
    (values) => {
      console.log(values);
      User.login(values)
        .then((res) => {
          setFormSubmitting(false);
          Auth.login(res.data.token, () => history.push("/profile"));
        })
        .catch((err) => {
          console.error(err, err.response);
          setFormSubmitting(false);
        });
    },
    schema,
    uiSchema
  );

  return (
    <Grid>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>
            <Dimmer active={isFormSubmitting} inverted>
              <Loader />
            </Dimmer>
            <Form submitLabel="Login" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
