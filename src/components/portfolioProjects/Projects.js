import React from "react"
import Project from "./Project"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          description {
            description
          }
          githubLink
          projectLink
        }
      }
    }
  }
`

const Projects = () => {
  const { projects } = useStaticQuery(query)
  console.log(projects)
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.edges.map(({ node }) => (
        <Project key={node.id} projectDetails={node} />
      ))}
    </div>
  )
}

export default Projects
