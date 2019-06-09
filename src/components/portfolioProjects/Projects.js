import React from "react"
import Project from "./Project"
import styled from "styled-components"
import styles from "../../css/items.module.css"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query projects {
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
          projectImg {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

// const ProjectsContainer = styled.div`
//   width: 80vw;
//   margin: 3rem auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
//   grid-column-gap: 2rem;
//   grid-row-gap: 2rem;
// `

const Projects = () => {
  const { projects } = useStaticQuery(query)
  console.log(projects)
  return (
    <section className={styles.tours}>
      {/* <Title title="our" subtitle="tours" /> */}
      <div className={styles.center}>
        {projects.edges.map(({ node }) => (
          <Project key={node.id} projectDetails={node} />
        ))}
      </div>
    </section>
  )
  return (
    <section>
      <h1>Portfolio</h1>

      {/* <ProjectsContainer> */}
      {projects.edges.map(({ node }) => (
        <Project key={node.id} projectDetails={node} />
      ))}
      {/* </ProjectsContainer> */}
    </section>
  )
}

export default Projects
