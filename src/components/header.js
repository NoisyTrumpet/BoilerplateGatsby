import Headroom from "react-headroom"
import React from "react"
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import "../scss/main.scss"
import "../scss/style.scss"
import logoPNG from "./../images/drcLogo.png"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Headroom>
      <div>
        <Navbar expand="lg">
          <NavbarBrand className="navbar-brand" href="#top">
            <img src={logoPNG} id="nav-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => scrollTo('#background')}>Background</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo('#regional-impact')}>Regional <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo('#international-impact')}>International <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo('#ecological-impact')}>Ecological <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => scrollTo('#what-can-be-done')}>What Can <br/>Be Done?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-donate-btn" href="">Donate to <br/>Our Cause</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Headroom>
  );
}

export default Header;
