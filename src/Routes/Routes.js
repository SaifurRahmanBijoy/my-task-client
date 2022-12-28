import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import HomeLanding from "../Pages/HomeLanding/HomeLanding";
import Login from "../Pages/Login/Login";
import MyTasks from "../Pages/MyTasks/MyTasks";
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
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/mytasks",
        element: <MyTasks></MyTasks>,
      },
    ],
  },
]);
