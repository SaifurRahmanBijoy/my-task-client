import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeLanding from "../Pages/HomeLanding/HomeLanding";
import Nav from "../Pages/Nav/Nav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeLanding></HomeLanding>,
      },
    ],
  },
]);
