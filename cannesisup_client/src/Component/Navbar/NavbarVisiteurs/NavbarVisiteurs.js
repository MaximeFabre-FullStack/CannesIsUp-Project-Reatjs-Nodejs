import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./NavbarVisiteurs.css";
import url from "../../../url.json";

class NavbarVisiteurs extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navContainer">
        <img src="/assets/img/logocopie.png" alt="logo" className="topLogo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-100">
            <Nav.Link href="https://cannesisup.com/#home" className="links">
              ACCUEIL
            </Nav.Link>
            <Nav.Link href={url["url-client"] + "/signup"} className="links">
              DEVENEZ ADHERENT
            </Nav.Link>
            <Nav.Link href="https://cannesisup.com/#dda" className="links">
              DDA Iles de Lerins
            </Nav.Link>
            <Nav.Link href="https://cannesisup.com/#dda" className="links">
              ACTUALITÉS
            </Nav.Link>
            <Nav.Link
              href="https://cannesisup.com/equipe.php"
              className="links"
            >
              L'EQUIPE
            </Nav.Link>
            <Nav.Link
              href="https://cannesisup.com/#partenaires"
              className="links"
            >
              PARTENAIRES
            </Nav.Link>
            <Nav.Link
              href="https://cannesisup.com/contact.php"
              className="links"
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarVisiteurs;
