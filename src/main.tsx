import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes";
import UserProvider from "./context/UserContext";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
