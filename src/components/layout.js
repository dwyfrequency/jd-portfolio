import React from "react"
// import Header from "./Header"
// import Footer from "./Footer"
import "./layout.css"

const Layout = props => {
  return (
    <div className="wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
