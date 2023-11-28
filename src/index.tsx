import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/StoreProvider";
import App from "./app/App";
import "@/app/styles/index.scss";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";

const rootContainer = document.getElementById("root");

if (!rootContainer) {
  throw new Error("Error: root container has not been found");
}

const root = createRoot(rootContainer);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
