import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PageProvider } from "./context/PageContext.jsx";
import { FinanceProvider } from "./context/FinanceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FinanceProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </FinanceProvider>
    </BrowserRouter>
  </StrictMode>,
);
