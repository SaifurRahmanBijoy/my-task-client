import React from "react";
import { Outlet } from "react-router-dom";
import EndElement from "../Pages/Footer/EndElement";
import Nav from "../Pages/Nav/Nav";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="w-11/12 mx-auto">
        <EndElement></EndElement>
      </div>
    </div>
  );
};

export default Main;
