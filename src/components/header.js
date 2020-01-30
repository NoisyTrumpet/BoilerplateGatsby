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
import "../scss/main.scss"
import "../scss/style.scss"
import logoPNG from "./../images/drcLogo.png"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Headroom>
      <div style={{
        backgroundColor: `rgba(255, 255, 255, .15) !important`,
        backdropFilter: `blur(5px)`
    }}>
        <Navbar expand="lg">
          <NavbarBrand href="#top">
            <img src={logoPNG} id="nav-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#background">Background</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#regional-impact">Regional <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#international-impact">International <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#ecological-impact">Ecological <br/>Impact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#what-can-be-done">What Can <br/>Be Done?</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Headroom>
  );
}

export default Header;
