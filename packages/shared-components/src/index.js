import { withRouter } from "react-router";
import { withAuth } from "unsplash-client-auth";

import HeaderComponent from "./Header";
import IconComponent from "./Icon";

export const Header = withAuth(withRouter(HeaderComponent));
export const Icon = withRouter(IconComponent);

export * from "./Container";
export * from "./SearchBar";
export * from "./Title";
export * from "./Input";
export * from "./Modal";
export * from "./Card";
