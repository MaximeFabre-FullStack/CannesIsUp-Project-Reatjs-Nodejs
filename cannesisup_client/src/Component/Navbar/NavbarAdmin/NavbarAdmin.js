import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./NavbarAdmin.css";
import { Redirect } from "react-router-dom";

class NavbarAdmin extends Component {
  deconnexion = () => {
    // en cas de deconnexion, enleve les elements du localstorage
    this.setState({ connecte: false });
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("admin");
    return <Redirect to="https://cannesisup.com/#actus" />;
  };

  render() {
    return (
      <Navbar bg="light" expand="lg" className="adminNavContainer">
        <img src="/assets/img/logocopie.png" alt="logo" className="topLogo" />
        <Navbar.Brand className="ml-100px" href="#home">
          Cannes is Up back-office
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-100px">
            <Nav.Link href="https://cannesisup.com/#home" className="ml-3">
              Site
            </Nav.Link>
            <Nav.Link href="/admin/charts" className="ml-3">
              Charts
            </Nav.Link>
            <Nav.Link href="/admin/annuaire" className="ml-3">
              Adherents
            </Nav.Link>
            <Nav.Link href="" className="ml-3">
              Settings
            </Nav.Link>
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
export default NavbarAdmin;
