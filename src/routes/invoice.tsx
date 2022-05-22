import React from "https://esm.sh/react@18";
import { useParams } from "https://esm.sh/react-router-dom@6";
import { getInvoice } from "../data.ts";

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoice(Number(params.invoiceId));

  if (!invoice) return <p>No invoice!</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>

      <p>
        {invoice.name}: {invoice.number}
      </p>

      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
