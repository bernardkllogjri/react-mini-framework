export const Auth = {
  login: token => localStorage,
  //   .setItem("token", token),
  logout: () => localStorage.setItem("token", undefined),
  token: () => localStorage.getItem("token")
};
