import { Navbar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CiDark } from "react-icons/ci";

const Nav = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("color-theme"));
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [theme]);
  const handleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    }
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  const menu = (
    <>
      <li>
        <Link
          to="/addtask"
          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent "
        >
          Add Tasks
        </Link>
      </li>
      <li>
        <Link to="/mytasks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          My Tasks
        </Link>
      </li>
      <li>
        <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent ">
          Completed Tasks
        </Link>
      </li>
      <li>
        <Link
          to="/media"
          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent "
        >
          Media
        </Link>
      </li>
      <li>
        {user?.uid ? (
          <>
            <Link
              onClick={handleLogOut}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent "
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-50 dark:hover:text-blue-400 md:dark:hover:bg-transparent "
            >
              Login
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="pb-2">
      <Navbar
        className="bg-slate-300 dark:bg-slate-700 rounded-b-md drop-shadow-md md:w-11/12 mx-2 md:mx-auto md:px-10"
        fluid={true}
      >
        <Navbar.Brand>
          <h2
            onClick={() => navigate("/")}
            className="self-center btn whitespace-nowrap md:text-xl font-semibold text-slate-700 dark:text-slate-200 font-serif cursor-pointer"
          >
            Tasks Manager
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="py-5 md:py-0">{menu}</Navbar.Collapse>
        <button className="bg-gray-300 border-b-2 hover:border border-black p-2 rounded-full dark:bg-blue-500 dark:bg-opacity-40 dark:border-white dark:text-white skew-y-3">
          <CiDark onClick={handleTheme}></CiDark>
        </button>
      </Navbar>
    </div>
  );
};

export default Nav;
