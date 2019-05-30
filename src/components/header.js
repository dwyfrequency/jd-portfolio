import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"

const Header = () => {
  const [isCollapsed, toggleCollapsed] = useState(false)

  const toggleCollapsedNav = () => {
    toggleCollapsed(isCollapsed => !toggleCollapsed)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          {/* <img src={logo} alt="backroads logo" /> */}
          JACK DWYER
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        JACK DWYER
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
