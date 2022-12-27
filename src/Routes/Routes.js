import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeLanding from "../Pages/HomeLanding/HomeLanding";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeLanding></HomeLanding>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
