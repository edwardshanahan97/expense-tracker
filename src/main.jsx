import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PageProvider } from "./context/PageContext.jsx";
import { FinanceProverider } from "./context/FinanceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FinanceProverider>
        <PageProvider>
          <App />
        </PageProvider>
      </FinanceProverider>
    </BrowserRouter>
  </StrictMode>,
);
