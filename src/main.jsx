import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import PantryProvider from "./context/PantryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PantryProvider>
        <App />
      </PantryProvider>
    </BrowserRouter>
  </StrictMode>
);