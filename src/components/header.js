import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import React from "react"
import bootstrap from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import "../scss/main.scss"
import "../scss/style.scss"
import logoPNG from "./../images/drcLogo.png"

const Header = ({ siteTitle }) => (
  <Headroom>
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "rgba(255, 255, 255 .15",
        backdropFilter: "blur(5px)",
      }}
    >
      <Navbar.Brand href="#home">
        <img src={logoPNG} alt="Logo" id="nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand
          href="#background"
          style={{
            color: "#98342f",
            fontFamily: "LemonMilk, sans-serif",
          }}
        >
          Background
        </Navbar.Brand>
        <Navbar.Brand
          href="#regional-impacts"
          style={{
            color: "#98342f",
            fontFamily: "LemonMilk, sans-serif",
          }}
        >
          Regional Impact
        </Navbar.Brand>
        <Navbar.Brand
          href="#international-impacts"
          style={{
            color: "#98342f",
            fontFamily: "LemonMilk, sans-serif",
          }}
        >
          International Impact
        </Navbar.Brand>
        <Navbar.Brand
          href="#ecological-impacts"
          style={{
            color: "#98342f",
            fontFamily: "LemonMilk, sans-serif",
          }}
        >
          Ecological Impact
        </Navbar.Brand>
        <Navbar.Brand
          href="#what-can-be-done"
          style={{
            color: "#98342f",
            fontFamily: "LemonMilk, sans-serif",
          }}
        >
          What Can Be Done?
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
