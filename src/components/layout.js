import * as React from "react";
import { container } from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Navigation from "./navigation";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulSeo {
        nodes {
          id
          title
          description {
            description
          }
          keywords
        }
      }
    }
  `);

  const seo = data.allContentfulSeo.nodes[0];

  return (
    <div className={container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle ? `${pageTitle} | ${seo.title}` : seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <Navigation />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
