import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// import Search from "./search";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

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
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
      # siteSearchIndex {
      #   index
      # }
    }
  `);

  const navbar = data.allContentfulNavbar.nodes[0];
  const image = getImage(navbar.logo);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (evt) => {
    setSearchQuery(evt.target.value);

    // Dispatch the custom event with the updated search query
    const searchQueryUpdateEvent = new CustomEvent("searchQueryUpdate", {
      detail: { query: evt.target.value },
    });
    document.dispatchEvent(searchQueryUpdateEvent);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <GatsbyImage
            className="w-full h-full object-cover"
            image={image}
            alt={navbar.title}
          />
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse md:border-0 mt-4 md:mt-0">
          {data.site.siteMetadata.menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              style={{ fontFamily: "Poiret-One" }}
              className="text-xl text-black-900 hover:text-orange-500"
              activeClassName="font-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <form className="relative flex items-center">
          <label
            htmlFor="default-search"
            className="sr-only text-black dark:text-white"
          >
            Search
          </label>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pr-8 text-black border rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500 dark:bg-white-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 focus:text-black "
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
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
        </form>

        {/* <Search
          searchQuery={searchQuery}
          onChange={handleSearchChange}
          searchIndex={data.siteSearchIndex.index}
        /> */}

        <div className="ml-auto md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle menu</span>
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
                d={
                  isMenuOpen
                    ? "M3 3h14M3 7h14m-14 4h14"
                    : "M1 1h15M1 7h15M1 13h15"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden w-full mt-4 md:mt-0`}
        >
          <ul className="flex flex-col items-center">
            {data.site.siteMetadata.menuLinks.map((link) => (
              <li key={link.name} className="mb-4">
                <Link
                  to={link.link}
                  onClick={toggleMenu}
                  className="text-xl text-black-900 hover:text-orange-500"
                  activeClassName="font-black"
                  style={{ fontFamily: "Poiret-One" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
