import React from "react"
import Header from "./header"
import Footer from "./footer"
// import "../../node/materialize-css/dist/css/materialize.min.css"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
