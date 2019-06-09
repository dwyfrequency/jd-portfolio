import React from "react"
// import Header from "./Header"
// import Footer from "./Footer"
// import "./layout.css"

const Lay = ({ children }) => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      {/* {props.children} */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Lay
