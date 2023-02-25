import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import Homepage from "../../pages/Homepage";



export const auth_routes_group = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
