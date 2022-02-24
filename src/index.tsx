import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "@styles/index.css";
import "@styles/variables.css";
import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
