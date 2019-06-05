import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import Head from "../components/head"
import Skills from "../components/about/Skills"
import styles from "../css/about.module.css"
const AboutPage = props => {
  return (
    <Layout>
      {/* <Head title="About" /> */}
      <section className={styles.about}>
        <h2 className={styles.title}>About</h2>
        <p>
          I'm Jack Dwyer, a full stack web developer, and designer living in New
          York City.
        </p>
        <p>
          I graduated from the University of Miami with concentrations on
          Computer Information Systems and Accounting. After leaving University,
          I worked at BlackRock in Manhattan as a Technical Product Manager on
          the Aladdin platform. I primarily focussed on evangelizing the use of
          developer APIs and data science tools in the Aladdin community. After
          some careful consideration, I decided to enroll at Fullstack Academy
          to improve my technical knowledge.
        </p>
        <p>
          When not creating websites, I love to spend time with my family and
          friends. You can find me out in the wild at either 10th Planet NYC,
          CorePower Yoga, Central Park, or whatever the latest contemporary art
          exhibit is.
        </p>
        <p>
          Need a dev? <Link to="/contact">Contact me!</Link>
        </p>
        <Skills />
      </section>
    </Layout>
  )
}

export default AboutPage
