import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"

const Header = () => {
  const [isCollapsed, toggleCollapsed] = useState(false)

  const toggleCollapsedNav = () => {
    toggleCollapsed(isCollapsed => !isCollapsed)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          {/* <img src={logo} alt="backroads logo" /> */}
          <h2 className={styles.brand}>JACK DWYER</h2>
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleCollapsedNav}
          >
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isCollapsed
              ? `${styles.navLinks} ${styles.showNav}`
              : styles.navLinks
          }
        >
          {links.map(({ path, text }) => (
            <li key={text}>
              <AniLink fade to={path}>
                {text}
              </AniLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
