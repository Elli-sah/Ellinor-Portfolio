import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./layout.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allContentfulIntroduction {
        nodes {
          id
          title
          subtitle
          description {
            raw
          }
          image {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  `);

  const introductionData = data.allContentfulIntroduction.nodes[0];
  const image = getImage(introductionData.image);

  return (
    <div>
      <header className="">
        <div className="text-center ">
          <h1
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  bg-clip-text text-transparent flex flex-wrap"
          ></h1>
          <h2 className="text-lg text-gray-500 mb-20"></h2>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center flex-col ">
            <h3
              style={{ fontFamily: "Lustria", width: "40rem" }}
              className="font-Lustria mb-4 mr-20 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              {introductionData.title}
            </h3>
            <h4 className="text-lg mr-20 text-center w-1/2 text-gray mb-9">
              {documentToReactComponents(
                JSON.parse(introductionData.description.raw)
              )}
            </h4>
            {/* <p className="text-black mb-4">
              {documentToReactComponents(
                JSON.parse(introductionData.description.raw)
              )}
            </p> */}
            <div className="flex mr-20 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-700 dark:hover:bg-orange-800 dark:focus:ring-orange-800"
              >
                Contact me here
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
            </div>
          </div>
          <div className="  flex items-center justify-center flex-col">
            {/* Placeholder for the image */}
            <GatsbyImage
              className="rounded-t-full"
              image={image}
              alt={introductionData.title}
            />
            <p style={{ fontFamily: "Poiret-One", fontSize: "2rem" }}>
              {introductionData.subtitle}
            </p>
          </div>
          <div className="w-90 border-t-2 border-gray-500 my-4"></div>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Header;
