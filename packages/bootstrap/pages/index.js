import loadable from "@loadable/component";

const Post = loadable(() => import("unsplash-client-post"));
const Login = loadable(() => import("unsplash-client-login"));
const Logout = loadable(() => import("unsplash-client-logout"));
const Profile = loadable(() => import("unsplash-client-profile"));
const Lending = loadable(() => import("unsplash-client-landing"));

export default [
  { view: Lending, path: "/" },
  { view: Post, path: "/post" },
  { view: Login, path: "/login", middleware: "guest" },
  { view: Logout, path: "/logout", middleware: "auth" },
  { view: Profile, path: "/profile", middleware: "auth" }
];
