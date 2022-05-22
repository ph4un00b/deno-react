import React from "https://esm.sh/react@18";
import { Link, Outlet } from "https://esm.sh/react-router-dom@6";
import { getInvoices } from "../data.ts";

export default function Invoices() {
  const invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
