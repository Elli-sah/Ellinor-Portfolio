/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Ellinor Sahlberg-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Example project for the Gatsby Head API`,
    image: `/gatsby-icon.png`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Projects",
        link: "/work",
      },
      {
        name: "Contact",
        link: "/connect",
      },
    ],
  },
  plugins: [
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `path`],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type ContentfulProjects, list how to resolve the fields' values
          allContentfulProjects: {
            title: (node) => node.title,
            path: (node) => node.path,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },

    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "bWE_Y-o1sBhsV9NQH4ulm9mwb4dFLm4f5CP720SbZCI",
        spaceId: "3hdlb90ef4lu",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
  ],
};
