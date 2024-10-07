import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Playgournd from "./Playgournd.jsx";
// import Prod from "./Prod.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Prod /> */}
    <Playgournd />
  </StrictMode>,
);
