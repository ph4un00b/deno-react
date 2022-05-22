import React from "https://esm.sh/react@18";
import {
  NavLink,
  Outlet,
  useSearchParams,
} from "https://esm.sh/react-router-dom@6";
import { getInvoices } from "../data.ts";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;

            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
          .filter((invoice) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;

            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  backgroundColor: isActive ? "yellowgreen" : "",
                  color: isActive ? "brown" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>

      <Outlet />
    </div>
  );
}
