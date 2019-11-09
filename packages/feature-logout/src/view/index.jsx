import { Auth } from "shared-auth";

export default ({ history }) => {
  Auth.logout(() => history.replace("/login"));
  return null;
};
