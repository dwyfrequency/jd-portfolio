import React from "react"
import Image from "gatsby-image"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
}

export default Project
