import * as React from "react";
import { container, heading, siteTitle } from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // const introductionData = data.allContentfulIntroduction.nodes[0];

  return (
    <div className={container}>
      {/* <header><h1 className={siteTitle}>{pageTitle}</h1></header> */}
      <Navigation />

      <main>
        {/* <h2 className={heading}></h2> */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
