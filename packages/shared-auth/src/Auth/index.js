export const Auth = {
  login: (token, then) => (localStorage.setItem("token", token), then()),
  logout: then => (localStorage.removeItem("token"), then()),
  token: () => localStorage.getItem("token")
};
