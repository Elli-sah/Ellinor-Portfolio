import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        nodes {
          id
          slug
          email
          phone
          github
          linkedIn
        }
      }
    }
  `);
  const contactInfo = data.allContentfulContact.nodes[0];

  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-2">
        <div className="mt-1 flex flex-col justify-center items-center text-center">
          <ul className="mt-4 flex flex-row justify-center flex-wrap ">
            <li
              className="flex justify-center mt-4 w-64"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoIosMail className="mr-2" /> {contactInfo.email}
            </li>
            <li
              className="mt-4 w-64 flex justify-center"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaPhone className="mr-2" /> {contactInfo.phone}
            </li>
            <li
              className="mt-4 w-64 justify-center "
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:underline flex items-center"
              >
                <FaGithub className="mr-2" /> Visit my GitHub!
              </a>
            </li>
            <li
              className="mt-4 w-64 flex justify-center"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:underline flex items-center"
              >
                <FaLinkedin className="mr-2" /> Visit my LinkedIn!
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center mt-10">
          <span className="text-sm text-black-500 sm:text-center dark:text-black-400">
            © {new Date().getFullYear()} -
            <a href="/#" className="hover:underline">
              Ellinor Sahlberg - Portfolio
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
