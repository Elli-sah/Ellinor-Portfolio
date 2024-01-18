import React, { useEffect } from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/cards";
import Header from "../components/header";
import AOS from "aos";
import { Link } from "gatsby";

import "aos/dist/aos.css";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Layout>
        <main
          className="bg-gray-100 py-16 px-4 min-h-screen"
          style={pageStyles}
        >
          <Header />
          <div className="h-1px border-black"></div>
          <div className="font-extrabold mt-40 ml-24 ">
            <h1 style={{ fontFamily: "Lustria", fontSize: "4rem" }}>
              My projects
            </h1>
          </div>
          <div className="flex flex-row gap-3 justify-center mt-6">
            <ProjectCard limit={3} showDescriptions={true} category={"All"} />
          </div>
          <div className="flex justify-end">
            <Link to="/work" key="view-all-projects">
              <button
                className="w-64 m-4 rounded-lg  p-3 text-center hover:text-orange-700 "
                style={{ cursor: "pointer" }}
              >
                <span className="mr-2">All Projects</span>
                <span role="img" aria-label="Arrow">
                  ➔
                </span>
              </button>
            </Link>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
