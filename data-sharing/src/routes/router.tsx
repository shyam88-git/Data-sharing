import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/random",
    element: <Login />,
  },
]);
export default router;
