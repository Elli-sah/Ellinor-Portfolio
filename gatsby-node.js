const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const projectsTemplate = path.resolve("./src/templates/projects.js"); // Ensure correct path

  const result = await graphql(
    `
      {
        allContentfulProjects {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      "There was an error loading your Contentful projects",
      result.errors
    );
    return;
  }

  const projects = result.data.allContentfulProjects.nodes;

  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: `/${project.slug}/`,
        component: projectsTemplate,
        context: {
          slug: project.slug,
        },
      });
    });
  }
};
