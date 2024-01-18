import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ConnectPage = ({ data }) => {
  const contactInfo = data.allContentfulContact.nodes[0];

  const image = getImage(contactInfo.image);

  return (
    <Layout pageTitle="Connect">
      <main className="bg-gray-100 py-16 px-4 min-h-screen flex">
        <div className="w-1/2 h-full">
          <GatsbyImage
            className="rounded-t-full w-full h-full object-cover"
            image={image}
            alt={contactInfo.title}
          />
        </div>
        <div className="max-w-4xl bg-white p-8 rounded shadow-lg w-1/2 flex justify-center flex-col text-center">
          <h1
            className="text-3xl font-bold mb-4 "
            style={{ fontFamily: "Lustria" }}
          >
            Connect with Me
          </h1>
          <p>
            If you have any questions or just want to say hi, feel free to
            connect with me!
          </p>
          <div className="mt-4 flex flex-col justify-center items-center text-center">
            <ul className="mt-4  ">
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem ",
                }}
              >
                <IoIosMail className="mr-2" /> {contactInfo.email}
              </li>
              <li
                className="mt-4"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaPhone className="mr-2" /> {contactInfo.phone}
              </li>
              <li
                className="mt-4"
                style={{
                  fontSize: "1rem ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 hover:underline flex items-center"
                >
                  <FaGithub className="mr-2" /> Visit my GitHub page here!
                </a>
              </li>
              <li
                className="mt-4"
                style={{
                  fontSize: "1rem ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 hover:underline flex items-center"
                >
                  <FaLinkedin className="mr-2" /> Visit my LinkedIn page here!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export const query = graphql`
  query {
    allContentfulContact {
      nodes {
        id
        slug
        title

        email
        adress
        phone
        github
        linkedIn
        image {
          gatsbyImageData(width: 400)
        }
      }
    }
  }
`;

export default ConnectPage;
