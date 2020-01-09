import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import React from "react"
import Menu from "../components/menu"
import "../styles/components/_header.scss"

const Header = ({ siteTitle }) => (
  <Headroom>
    <nav className="navbar" id="top">
      <Link to="#top" className="nav-item">
        DRC
      </Link>
      <Link to="#background" className="nav-item">
        Background
      </Link>
      <Link to="#regional-impacts" className="nav-item">
        Regional Impact
      </Link>
      <Link to="#international-impacts" className="nav-item">
        International Impact
      </Link>
      <Link to="#ecological-impacts" className="nav-item">
        Ecological Impact
      </Link>
      <Link to="#what-can-be-done" className="nav-item">
        What Can Be Done?
      </Link>
    </nav>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
