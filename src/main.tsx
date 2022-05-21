import React from 'https://esm.sh/react@18'
import ReactDOM from 'https://esm.sh/react-dom@18/client'
import App from "./components/App.tsx";

/* document was configured with proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)