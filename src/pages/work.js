import React, { useState } from "react";
import ProjectCard from "../components/cards";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const WorkPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProjects = data.allContentfulProjects.nodes;
  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];

  const pageStyles = {
    color: "#232129",
    padding: 20,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  };

  return (
    <main className={pageStyles}>
      <Layout>
        <div className="flex justify-center">
          <h1 style={{ fontFamily: "Lustria", fontSize: "60px" }}>Projects</h1>
        </div>
        <div className="flex justify-center pt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`m-2 p-2 rounded-lg  w-36 h-10 ${
                selectedCategory === category
                  ? "text-black underline"
                  : "hover:text-orange-700 "
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <ProjectCard showDescriptions={true} category={selectedCategory} />
      </Layout>
    </main>
  );
};

export const Head = () => <title>Projects</title>;

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        id
        title
        category
      }
    }
  }
`;
export default WorkPage;
