import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="dark:bg-slate-800 h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
