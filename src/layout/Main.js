import React from "react";
import { Outlet } from "react-router-dom";
import EndElement from "../Pages/Footer/EndElement";
import Nav from "../Pages/Nav/Nav";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black bg-opacity-10 dark:bg-slate-900">
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="md:w-11/12 md:mx-auto">
        <EndElement></EndElement>
      </div>
    </div>
  );
};

export default Main;
