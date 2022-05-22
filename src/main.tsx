import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import App from "./components/App.tsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "https://esm.sh/react-router-dom@6";
import Expenses from "./routes/expenses.tsx";
import Invoices from "./routes/invoices.tsx";

/* document was configured with proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
