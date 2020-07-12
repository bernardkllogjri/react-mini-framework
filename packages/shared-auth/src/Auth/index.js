import { useLocalStorage, pageRenderer } from "../../../shared-utils/src/";

console.log(useLocalStorage, pageRenderer);

const [token, setToken] = useLocalStorage("token", null);

export const Auth = {
  login: (token, then) => (setToken(token), then()),
  logout: (then) => (setToken(null), then()),
  token: () => token,
};
