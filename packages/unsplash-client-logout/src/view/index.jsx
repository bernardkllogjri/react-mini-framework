import { Auth } from "unsplash-client-auth";

export default ({ history }) => {
  Auth.logout(() => history.replace("/login"));
  return null;
};
