import React, { Component } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavbarAdherent.css";
import { Redirect, withRouter } from "react-router-dom";

class NavbarAdherent extends Component {
  deconnexion = () => {
    // en cas de deconnexion, enleve les elements du localstorage
    this.setState({ connecte: false });
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    return <Redirect to="https://cannesisup.com/#actus" />;
  };

  routeFiche = () => {
    const userid = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    if (userid && token) {
      this.props.history.push("/adherent/" + userid);
    } else {
      return;
    }
  };

  render() {
    return (
      <Navbar bg="light" expand="lg" className="adherentNavContainer">
        <img
          src="/assets/img/logocopie.png"
          alt="logo"
          className="topLogoAdherent"
        />
        <Navbar.Brand className="ml-100px" href="#home">
          Cannes is Up back-office Adherent
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-100px">
            <Nav.Link href="https://cannesisup.com/#home" className="ml-3">
              Site
            </Nav.Link>
            <Nav.Link href="/admin/annuaire" className="ml-3">
              Profil
            </Nav.Link>
            <NavDropdown
              title="Parametres"
              id="basic-nav-dropdown"
              className="ml-3"
            >
              <NavDropdown.Item href="">Modifier mail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/passwordreset">
                Modifier mot de passe
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://cannesisup.com/#home"
              onClick={this.deconnexion}
              className="ml-3"
            >
              Deconnexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NavbarAdherent);
