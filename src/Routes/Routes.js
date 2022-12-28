import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import HomeLanding from "../Pages/HomeLanding/HomeLanding";
import Login from "../Pages/Login/Login";
import Contents from "../Pages/Media/Contents";
import MyTasks from "../Pages/MyTasks/MyTasks";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
      {
        path: "/addtask",
        element: (
          <PrivateRoutes>
            <AddTask />
          </PrivateRoutes>
        ),
      },
      {
        path: "/mytasks",
        element: (
          <PrivateRoutes>
            <MyTasks></MyTasks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/completed",
        element: (
          <PrivateRoutes>
            <CompletedTask></CompletedTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/media",
        element: (
          <PrivateRoutes>
            <Contents></Contents>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
