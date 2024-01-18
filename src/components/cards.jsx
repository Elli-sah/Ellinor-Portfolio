import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import AOS from "aos";
import "aos/dist/aos.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectCard = ({ projects, limit, showDescriptions, category }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        nodes {
          id
          slug
          title
          shortdescription
          category
          image {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  `);

  const projectsToDisplay = limit
    ? data.allContentfulProjects.nodes.slice(0, limit)
    : data.allContentfulProjects.nodes;

  const filteredProjects =
    category === "All"
      ? projectsToDisplay
      : projectsToDisplay.filter((project) => project.category === category);

  return (
    <div className="m-4 mt-0 p-6 flex flex-row gap-3 flex-wrap justify-center">
      {filteredProjects.map((project) => (
        <Link to={`/${project.slug}`} key={project.id}>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="true"
            className="w-74 m-4 rounded-lg bg-white border border-gray-200 overflow-hidden shadow-lg "
          >
            <GatsbyImage
              image={getImage(project.image)}
              alt={project.title}
              className="w-full h-40 rounded-t-lg"
            />
            <div className="p-3 text-center flex justify-center flex-col items-center">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-black">
                {project.title}
              </h5>

              {showDescriptions && (
                <p
                  className="mb-3 text-sm font-normal text-black dark:text-black overflow-wrap-break-word "
                  style={{
                    maxWidth: "15rem",
                    overflow: "hidden",
                  }}
                >
                  {project.shortdescription}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
