import React from "https://esm.sh/react@17";
import ReactDOM from "https://esm.sh/react-dom@17";
import App from "./components/App.tsx";
import { BrowserRouter } from "https://esm.sh/react-router-dom@6";

/* bundling */
/* https://lume.land/plugins/bundler/#typescript-for-the-browser */
/// <reference lib="dom" />

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  /* document was configured with proper deno.json */
  /* https://deno.land/manual/typescript/configuration#using-the-lib-property */
  document.getElementById("root")!,
);
