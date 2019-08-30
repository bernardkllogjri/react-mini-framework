import { Button, Stack } from "@kiwicom/orbit-components";
import { Illustration } from "@kiwicom/orbit-components";
import { Card, Input } from "shared-components";
import { Container } from "shared-components";
import { Auth } from "unsplash-client-auth";
import Layout from "shared-page-wrapper";
import validations from "./validations";
import { Formik, Form } from "formik";
import { User } from "shared-api";
import React from "react";

const init = {
  email: "",
  password: ""
};

const login = (values, setSubmitting, history) => {
  User.login(values)
    .then(res => {
      setSubmitting(false);
      Auth.login(res.data.token, () => history.push("/profile"));
    })
    .catch(err => {
      console.log(err, err.response);
      setSubmitting(false);
    });
};

export default ({ history }) => (
  <Layout noHeader>
    <Container centered>
      <Card header="Login">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Illustration name="Help" />
        </div>
        <Formik
          initialValues={init}
          validationSchema={validations}
          onSubmit={(values, { setSubmitting }) =>
            login(values, setSubmitting, history)
          }
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack>
                <Input type="email" name="email" />
                <Input type="password" name="password" />
                <Button submit={true} disabled={isSubmitting}>
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  </Layout>
);
