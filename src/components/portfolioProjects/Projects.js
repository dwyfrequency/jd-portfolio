import React from "react"
import Project from "./Project"
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

const Projects = () => {
  const { projects } = useStaticQuery(query)
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
}

export default Projects
