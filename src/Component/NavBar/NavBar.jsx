import { NavLink } from "react-router-dom";
import logo from "../../assets/NiN.png";
import { useState } from "react";

const NavBar = () => {
  const [open, isOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-light-sky" : "text-white"
          }
          aria-current="page"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-light-sky" : "text-white"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/termsCondition"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-light-sky" : "text-white"
          }
        >
          Terms & Condition
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="border-0 shadow-md shadow-light-sky py-3 px-2 rounded-xl text-white bg-dark-orange hover:text-dark-orange hover:bg-white"
        >
          Log in/Register
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14 " alt="NiN AI Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => isOpen(!open)}
        >
          <span className="sr-only text-white">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links}
          </ul>
        </div>
        <div className="md:hidden absolute top-16 w-full right-0 left-0 transition-all duration-1000">
          <ul
            style={{ display: open ? "block" : "none" }}
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
