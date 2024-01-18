import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const Navigation = () => (
  <nav>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span> */}
      </Link>

      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          style={{ fontFamily: "Poiret-One" }}
          className={`${navLinks} flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
        >
          <li className={navLinkItem}>
            <Link
              to="/"
              className={navLinkText}
              activeClassName="text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              aria-current="page"
            >
              Portfolio
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/about"
              className={navLinkText}
              activeClassName="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/work"
              className={navLinkText}
              activeClassName="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-blue dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/connect"
              className={navLinkText}
              activeClassName="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
