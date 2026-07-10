import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "./styles/global.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element was not found in index.html."
  );
}

const redirectedPath =
  sessionStorage.getItem("githubPagesRedirect");

if (redirectedPath) {
  sessionStorage.removeItem("githubPagesRedirect");

  window.history.replaceState(
    null,
    "",
    redirectedPath
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);