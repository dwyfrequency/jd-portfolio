import React from "react"
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
  return <div>Projects will live here</div>
}

export default Projects
