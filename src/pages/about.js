import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import Head from "../components/head"

const AboutPage = props => {
  return (
    <Layout>
      {/* <Head title="About" /> */}
      <h1>About</h1>
      <p>
        I'm Jack Dwyer, a full stack web developer, and designer living in New
        York City.
      </p>
      <p>
        I graduated from the University of Miami with concentrations on Computer
        Information Systems and Accounting. After leaving University, I worked
        at BlackRock in Manhattan as a Technical Product Manager on the Aladdin
        platform. I primarily focussed on evangelizing the use of developer APIs
        and data science tools in the Aladdin community. After some careful
        consideration, I decided to enroll at Fullstack Academy to improve my
        technical knowledge.
      </p>
      <p>
        Need a dev? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
