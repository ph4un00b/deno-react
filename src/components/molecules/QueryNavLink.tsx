import React from "https://esm.sh/react@18";
import {
  Link,
  LinkProps,
  NavLink,
  NavLinkProps,
  useLocation,
  useSearchParams,
} from "https://esm.sh/react-router-dom@6";

export function QueryNavLink({ to, ...props }: NavLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

type ActiveProps = LinkProps & {
  query: string;
  queryParams: string;
};

export function ActiveQueryLink(spec: ActiveProps) {
  const { query, queryParams, to, ...props } = spec;
  const [params] = useSearchParams();
  const location = useLocation();
  const isActive = params.getAll(query).includes(queryParams);

  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/${location.pathname}?${query}=${queryParams}`}
      {...props}
    />
  );
}
