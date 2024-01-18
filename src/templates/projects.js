import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectPage = ({ data }) => {
  const images = data.project.images.map((image) => getImage(image));

  return (
    <Layout pageTitle={data.project.title}>
      <div className="bg-gray-100 py-16 px-4 min-h-screen flex">
        <div className="max-w-4xl bg-white p-10 rounded shadow-lg w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl text-center font-bold mb-4">
            {data.project.title}
          </h1>
          <p className="text-lg font-bold text-gray-100">
            {data.project.shortdescription}
          </p>
          <p className="text-lg">
            {data.project.longDescription.longDescription}
          </p>
          <p className="mt-4">
            <a
              href={data.project.links}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 hover:underline flex items-center"
            >
              <FaGithub className="mr-2" /> Link to the project!
            </a>
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Carousel autoPlay infiniteLoop className="w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="h-full w-full">
                <GatsbyImage
                  className="object-cover h-full w-full"
                  image={image}
                  alt={`Project Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;

export const pageQuery = graphql`
  query ($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      slug
      title
      shortdescription
      longDescription {
        longDescription
      }
      images {
        gatsbyImageData(width: 800, quality: 80)
      }
      links
    }
  }
`;
