import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNavbar {
        nodes {
          id
          slug
          logo {
            gatsbyImageData(width: 80)
          }
        }
      }
    }
  `);
  const navbar = data.allContentfulNavbar.nodes[0];
  const image = getImage(navbar.logo);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <GatsbyImage
            className=" w-full h-full object-cover"
            image={image}
            alt={navbar.title}
          />
        </Link>

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
              Home
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

        <form className="flex items-center">
          <label
            htmlFor="default-search"
            className="sr-only text-black dark:text-white"
          >
            Search
          </label>
          <div className="relative flex items-center">
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-2 text-black border border-black rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500 dark:bg-white-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 focus:text-black "
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
            >
              {/* Search Icon */}
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
