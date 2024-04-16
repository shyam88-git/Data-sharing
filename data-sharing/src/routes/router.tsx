import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
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
