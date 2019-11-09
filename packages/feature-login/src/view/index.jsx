import { Auth } from "shared-auth";
import validations from "./validations";
import { User } from "shared-api";
import React from "react";
import { Formik } from "formik";

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
  <div>
    <Formik
      initialValues={init}
      validationSchema={validations}
      onSubmit={(values, { setSubmitting }) =>
        login(values, setSubmitting, history)
      }
    >
      {({ isSubmitting }) => (
        <form>
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <button submit="true" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);
