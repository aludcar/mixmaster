import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";

import "react-toastify/ReactToastify.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* setup Toast, position in center-top and autoclose 2000 ms */}
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </React.StrictMode>
);
