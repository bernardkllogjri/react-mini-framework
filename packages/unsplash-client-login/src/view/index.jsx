import { Button, Stack } from "@kiwicom/orbit-components";
import { Card, Input } from "shared-components";
import { Container } from "shared-components";
import Layout from "shared-page-wrapper";
import { Formik, Form } from "formik";
import { User } from "shared-api";
import validations from "./validations";
import React from "react";
import { Auth } from "unsplash-client-auth";
import { Illustration } from "@kiwicom/orbit-components";

export default () => {
  return (
    <Layout>
      <Container centered>
        <Card header="Login">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Illustration name="Help" />
          </div>
          <Formik
            validationSchema={validations}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              User.login(values)
                .then(res => {
                  setSubmitting(false);
                  Auth.login(res.data.token);
                })
                .catch(err => {
                  setSubmitting(false);
                  console.log(err, err.response);
                });
            }}
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
};
