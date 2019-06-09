import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectCard = styled.div`
  border: 2px solid green;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .detailContainer {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* :last-child {
      margin: auto 0;
    } */
  }
  .links {
    border: 2px solid red;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-direction: row;
  }
`

const Project = ({ projectDetails }) => {
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image
          fluid={projectDetails.projectImg.fluid}
          className={styles.img}
          alt="single project"
        />
        <a
          fade
          className={styles.link}
          href={projectDetails.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site
        </a>
      </div>
      <hr style={{ border: "2px solid var(--darkGrey)" }} />
      <div className={styles.footer}>
        <h3>{projectDetails.title}</h3>
        <div className={styles.info}>
          <p>{projectDetails.description.description}</p>
          {/* <h4 className={styles.country}>"default country"</h4>
          <div className={styles.details}>
            <h6>12 days</h6>
            <h6>from $100</h6>
          </div> */}
        </div>
      </div>
    </article>
  )
  return (
    <ProjectCard>
      <div className="imageContainer">
        <Image fluid={projectDetails.projectImg.fluid} />
      </div>
      <div className="detailContainer">
        <h2>{projectDetails.title}</h2>
        <p>{projectDetails.description.description}</p>
        <div className="links">
          <a
            href={projectDetails.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
          <a
            href={projectDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
        </div>
      </div>
    </ProjectCard>
  )
}

export default Project
