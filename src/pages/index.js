import React, { useEffect } from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/cards";
import Header from "../components/header";
import AOS from "aos";
import { Link } from "gatsby";
import Skills from "../components/Skills";

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
          <div className="flex justify-center">
            <div
              style={{
                width: "95%",
                height: "1px",
                border: "1px solid black",
                marginTop: "10%",
              }}
            ></div>
          </div>
          <div className="font-extrabold mt-20 ml-14 ">
            <h1 style={{ fontFamily: "Lustria", fontSize: "3rem" }}>
              My projects
            </h1>
          </div>
          <div className="flex justify-center align-center flex-col ">
            <div
              className="flex flex-col justify-center mt-6 bg-white p-3 rounded shadow-lg"
              style={{ flex: 1, width: "90vw" }}
            >
              <ProjectCard limit={3} showDescriptions={true} category={"All"} />
              <div className="flex justify-end ">
                <Link to="/work" key="view-all-projects">
                  <button
                    className="w-64 m-2 rounded-lg  p-3 text-center hover:text-orange-700 "
                    style={{ cursor: "pointer" }}
                  >
                    <span className="mr-2">All Projects</span>
                    <span role="img" aria-label="Arrow">
                      ➔
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Skills />
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
