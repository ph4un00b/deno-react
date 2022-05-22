import React from "https://esm.sh/react@18";
import { useParams } from "https://esm.sh/react-router-dom@6";

export default function Invoice() {
  const params = useParams();

  return <h2>Invoice {params.invoiceId}</h2>;
}
