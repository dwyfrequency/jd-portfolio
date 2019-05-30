import React from "react"
import Layout from "../components/Layout"
// import Head from "../components/head"

const ContactPage = props => {
  return (
    <Layout>
      {/* <Head title="Contact" /> */}
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href="https://twitter.com/dwyfrequency"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dwyfrequency
        </a>{" "}
        on twitter
      </p>
    </Layout>
  )
}

export default ContactPage
