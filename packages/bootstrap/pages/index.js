import loadable from "@loadable/component";

export default [
  { view: loadable(() => import("unsplash-client-landing")), path: "/" },
  {
    view: loadable(() => import("unsplash-client-profile")),
    path: "/profile",
    middleware: "auth"
  },
  {
    view: loadable(() => import("unsplash-client-login")),
    path: "/login",
    middleware: "guest"
  }
];
