import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      project: contentfulAboutpage {
        id
        title
        slug
        description {
          raw
        }
      }
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
      allContentfulEducations {
        nodes {
          id
          slug
          title
          educationOne
          descriptionOne {
            descriptionOne
          }
          educationTwo
          descriptionTwo {
            descriptionTwo
          }
          educationThree
          descriptionThree {
            descriptionThree
          }

          image {
            gatsbyImageData(width: 400)
          }
        }
      }
      allContentfulExperience {
        nodes {
          id
          slug
          title
          experienceOne
          descriptionOne
          experienceTwo
          descriptionTwo
          experienceThree
          descriptionThree
          experienceFour
          descriptionFour

          image {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  `);

  const about = data.project; // Accessing the result as data.project
  const educationInfo = data.allContentfulEducations.nodes[0];
  const experienceInfo = data.allContentfulExperience.nodes[0];
  const introductionData = data.allContentfulIntroduction.nodes[0];
  const image = getImage(introductionData.image);
  const imageEd = getImage(educationInfo.image);
  const imageEx = getImage(experienceInfo.image);

  return (
    <Layout pageTitle="Connect">
      <main className="bg-gray-100 py-16 px-4 min-h-screen ">
        <div className="flex flex-row">
          <div className="w-1/2 flex justify-center">
            <div
              className=" max-w-4xl bg-white p-10 rounded shadow-lg w-1/2 flex-col flex flex-col item-center justify-center"
              style={{ flex: 1 }}
            >
              <h2
                className="text-5xl text-center font-bold mb-4"
                style={{ fontFamily: "Lustria" }}
              >
                {about.title}
              </h2>
              <p>
                {about.description &&
                  documentToReactComponents(JSON.parse(about.description.raw))}
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <GatsbyImage
              className=" w-full h-full object-cover"
              image={image}
              alt={introductionData.title}
            />
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="w-1/2">
            <GatsbyImage
              className=" w-full h-full object-cover"
              image={imageEd}
              alt={educationInfo.title}
            />
          </div>
          <div className="w-1/2 flex justify-center">
            <div
              className=" max-w-4xl bg-white p-8 rounded shadow-lg w-1/2 flex-col  flex flex-col item-center justify-center"
              style={{ flex: 1 }}
            >
              <h2
                className="text-5xl text-center font-bold mb-4"
                style={{ fontFamily: "Lustria" }}
              >
                {educationInfo.title}
              </h2>
              <div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {educationInfo.educationOne}
                  </h3>
                  <p>{educationInfo.descriptionOne.descriptionOne}</p>
                </div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {educationInfo.educationTwo}
                  </h3>
                  <p>{educationInfo.descriptionTwo.descriptionTwo}</p>
                </div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {educationInfo.educationThree}
                  </h3>
                  <p>{educationInfo.descriptionThree.descriptionThree}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="w-1/2 flex justify-center">
            <div
              className=" max-w-4xl bg-white p-8 rounded shadow-lg w-1/2 flex-col flex flex-col item-center justify-center"
              style={{ flex: 1 }}
            >
              <h2
                className="text-5xl text-center font-bold mb-4"
                style={{ fontFamily: "Lustria" }}
              >
                {experienceInfo.title}
              </h2>
              <div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {experienceInfo.experienceOne}
                  </h3>
                  <ul>
                    {experienceInfo.descriptionOne.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {experienceInfo.experienceTwo}
                  </h3>
                  <ul>
                    {experienceInfo.descriptionTwo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {experienceInfo.experienceThree}
                  </h3>
                  <ul>
                    {experienceInfo.descriptionThree.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontSize: "115%",
                    }}
                  >
                    {experienceInfo.experienceFour}
                  </h3>
                  <ul>
                    {experienceInfo.descriptionFour.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <GatsbyImage
              className=" w-full h-full object-cover"
              image={imageEx}
              alt={experienceInfo.title}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
