import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App2 from "./App2.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
