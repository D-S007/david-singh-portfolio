import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";  // make sure filename matches
import { RouterProvider } from "react-router-dom";
import "../index.css";   // ✅ only here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
