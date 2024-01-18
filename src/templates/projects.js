import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectPage = ({ data }) => {
  const images = data.project.images.map((image) => getImage(image));

  return (
    <Layout pageTitle={data.project.title}>
      <div className="bg-gray-100 py-16 px-4 min-h-screen flex">
        <div className="max-w-4xl bg-white p-8 rounded shadow-lg w-1/2 flex justify-center flex-col text-center">
          <h1 className="text-3xl font-bold mb-4">{data.project.title}</h1>
          <p className="text-lg">{data.project.shortdescription}</p>
          <p className="text-lg">
            {data.project.longDescription.longDescription}
          </p>
        </div>
        <div className="w-1/2">
          <Carousel autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div className=" h-500" key={index}>
                <GatsbyImage
                  className="object-cover"
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
    }
  }
`;
