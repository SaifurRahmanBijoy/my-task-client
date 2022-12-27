import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
