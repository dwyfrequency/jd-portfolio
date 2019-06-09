import React from "react"
import Header from "./Head"
import Footer from "./Foot"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
