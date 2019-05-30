import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/" className="nav-link">
        <Navbar.Brand>JACK DWYER</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
