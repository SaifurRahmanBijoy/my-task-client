import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const menu = (
    <>
      <li>
        <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          Add Tasks
        </Link>
      </li>
      <li>
        <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          My Tasks
        </Link>
      </li>
      <li>
        <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          Completed Tasks
        </Link>
      </li>
      <li>
        <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="pb-2">
      <Navbar
        className="bg-slate-300 dark:bg-slate-700 rounded-b-md shadow w-11/12 mx-auto px-10 md:px-10"
        fluid={true}
      >
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap md:text-xl font-semibold text-slate-700 dark:text-slate-200 font-serif">
            Tasks Manager
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="py-5 md:py-0">{menu}</Navbar.Collapse>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center justify-center cursor-pointer mx-2"
        >
          <input
            type="checkbox"
            onClick={handleTheme}
            id="default-toggle"
            className="sr-only peer shadow-inner"
          />
          <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-red-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-800"></div>
        </label>
      </Navbar>
    </div>
  );
};

export default Nav;
