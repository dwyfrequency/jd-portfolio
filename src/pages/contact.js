import React from "react"
import Layout from "../components/Lay"
import Title from "../components/Title"
// import Head from "../components/head"

const ContactPage = props => {
  return (
    <Layout>
      {/* <Head title="Contact" /> */}
      <Title title="Contact" subtitle="me" />
      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        The best way to reach me is via @
        <a
          href="https://twitter.com/dwyfrequency"
          target="_blank"
          rel="noopener noreferrer"
        >
          dwyfrequency
        </a>{" "}
        on twitter
      </p>
    </Layout>
  )
}

export default ContactPage
