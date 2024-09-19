import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App/App.jsx";
import { GlobalStyle } from "./App/Styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
