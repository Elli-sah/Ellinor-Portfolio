import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./layout.module.css";
import { Link } from "gatsby";
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
      <header>
        <div className="text-center "></div>
        <div className=" flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center flex-col ">
            <h1
              style={{ fontFamily: "Lustria", width: "40rem" }}
              className="font-Lustria mb-4 mr-20 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              {introductionData.title}
            </h1>
            <h2 className="text-lg mr-20 text-center w-1/2 text-gray mb-9">
              {documentToReactComponents(
                JSON.parse(introductionData.description.raw)
              )}
            </h2>

            <div className="flex mr-20 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
              <Link to="/connect">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-700 dark:hover:bg-orange-800 dark:focus:ring-orange-800"
                >
                  Contact me here
                </button>
              </Link>
            </div>
          </div>
          <div className="  flex items-center justify-center flex-col">
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
    </div>
  );
};

export default Header;
