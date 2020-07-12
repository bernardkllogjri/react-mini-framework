export const schema = {
  title: "Login",
  liveValidate: true,
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      format: "password",
    },
    // disabled: {
    //   type: "string",
    //   readOnly: true,
    // },
    // dollar: {
    //   type: "integer",
    //   format: "currency",
    //   default: 0.0,
    // },
    // date: {
    //   type: "string",
    //   format: "datetime",
    // },
  },
};
export const uiSchema = {};
