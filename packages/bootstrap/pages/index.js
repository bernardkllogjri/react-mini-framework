import loadable from "@loadable/component";

const Profile = loadable(() => import("feature-guarded-page"));
const Lending = loadable(() => import("feature-landing"));
const Logout = loadable(() => import("feature-logout"));
const Login = loadable(() => import("feature-login"));

export default [
  { view: Lending, path: "/" },
  { view: Login, path: "/login", middleware: "guest" },
  { view: Logout, path: "/logout", middleware: "auth" },
  { view: Profile, path: "/profile", middleware: "auth" }
];
