import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      background: `rgba(75, 155, 240, 1) 0%`,
      background: `linear-gradient(to bottom, rgba(75, 155, 240, 1) 0%, rgba(75, 155, 240, 1) 0%, rgba(185, 214, 239, 1) 100%)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
