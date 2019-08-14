import loadable from "@loadable/component";

export default [
  { view: loadable(() => import("unsplash-client-landing")), path: "/" }
];
