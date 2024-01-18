import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkills {
        nodes {
          id
          slug
          title
          skills
        }
      }
    }
  `);

  const skillsInfo = data.allContentfulSkills.nodes[0];

  return (
    <div className=" flex flex-col my-20">
      <h2
        className="ml-14 text-5xl font-bold mb-4"
        style={{ fontFamily: "Lustria" }}
      >
        {skillsInfo.title}
      </h2>
      <div className=" flex justify-center">
        <div
          className="  bg-white p-8 rounded shadow-lg flex-col flex items-center justify-center"
          style={{ flex: 1, width: "90vw" }}
        >
          <div className="p-3">
            <ul className="flex justify-center flex-wrap">
              {skillsInfo.skills.map((item, index) => (
                <li className=" my-10 mx-10" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
