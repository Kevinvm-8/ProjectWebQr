import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";


import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userToken');

  };



  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
  });

  window.addEventListener("scroll", scrollHandler);

  return (


    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >

      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
                <p>HOME</p>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/checklist"
                onClick={() => updateExpanded(false)}
              >
                CHECKLIST
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/report"
                onClick={() => updateExpanded(false)}
              >
                REPORT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <button className="btn btn-primary mb-4 px-5"
                  size="lg"
                  onClick={handleLogout}>logout</button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;