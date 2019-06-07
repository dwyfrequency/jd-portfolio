import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const ProjectCard = styled.div`
  border: 2px solid green;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Project = ({ projectDetails }) => {
  return (
    <ProjectCard>
      <Image fluid={projectDetails.projectImg.fluid} />
      <h2>{projectDetails.title}</h2>
      <p>{projectDetails.description.description}</p>
    </ProjectCard>
  )
}

export default Project
