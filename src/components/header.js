import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import React from "react"
import "../scss/main.scss"

const Header = ({ siteTitle }) => (
  <Headroom>
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <span className="navbar-brand">
          <Link to="#top" className="navbar-brand">
            DRC
          </Link>
        </span>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <span className="nav-link">
              <Link to="#background" className="navbar-brand">
                Background
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="#regional-impacts" className="navbar-brand">
                Regional Impact
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="#international-impacts" className="navbar-brand">
                International Impact
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="#ecological-impacts" className="navbar-brand">
                Ecological Impact
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="#what-can-be-done" className="navbar-brand">
                What Can Be Done?
              </Link>
            </span>
          </li>
        </ul>np
      </div>
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
