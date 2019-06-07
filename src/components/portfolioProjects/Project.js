import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

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
