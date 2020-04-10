import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from './nav';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3d5af1`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className='logo'>
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
    
    <Nav />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
