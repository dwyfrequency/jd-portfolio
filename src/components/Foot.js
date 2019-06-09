import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import links from "../constants/links"
import styles from "../css/footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(({ path, text }) => (
          <AniLink fade to={path} key={text}>
            {text}
          </AniLink>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; {data.site.siteMetadata.author}{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
