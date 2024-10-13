import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Employee from "./components/Employee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Employee />,
  },
]);

export default router;
