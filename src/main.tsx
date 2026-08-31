import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ExpenseProvider } from "./context/ExpenseContext.tsx";
import { CategoryProvider } from "./context/CategoryContext.tsx";
import { SessionProvider } from "./context/SessionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <CategoryProvider>
        <ExpenseProvider>
          <App />
        </ExpenseProvider>
      </CategoryProvider>
    </SessionProvider>
  </StrictMode>,
);
