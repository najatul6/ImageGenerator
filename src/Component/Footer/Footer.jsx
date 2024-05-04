import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/NiN.png";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-light-sky" : "text-white"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/privacyPolicy"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-light-sky" : "text-white"
          }
        >
          Privacy Policy
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
    </>
  );
  return (
    <footer className="bg-white rounded-t-xl shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="https://najatul6-cbc29.web.app/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Brand Logo" />
          </Link>
          <ul className="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links}
          </ul>
        </div>
      </div>
      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-white sm:text-center dark:text-white font-medium pb-4">
        &copy; 2024 All Rights Reserved By{" "}
        <Link
          to="https://najatul6-cbc29.web.app/"
          className="hover:text-light-sky text-dark-orange font-bold mr-2 "
          target="_blank"
        >
          <span className="underline">NiN</span>
          <sup className="no-underline">Ai</sup>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
