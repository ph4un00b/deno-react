import React from "https://esm.sh/react@18";
import {
  NavLink,
  NavLinkProps,
  useLocation,
} from "https://esm.sh/react-router-dom@6";

export function QueryNavLink({ to, ...props }: NavLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
