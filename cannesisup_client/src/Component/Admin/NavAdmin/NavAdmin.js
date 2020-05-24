import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { Col, Row, Container, Dropdown, ButtonGroup } from "react-bootstrap";

import "../../../mainStyle.css";
import "./NavAdmin.css";

class NavAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "cache",
      dropDownStyle: "cache",
      connecte: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    if (token && uid) {
      this.setState({ style: "style1 lienNavbar" }); // change le style de la navbar si connecté
      this.setState({ dropDownStyle: "" }); // change le style du dropdown menu si connecté
      this.setState({ connecte: true });
    }
  }

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
      <div className="navbarContainer">
        <div className="bande"></div>
        <a href="https://cannesisup.com/#home" className="logoNav">
          <img src="/assets/img/logocopie.png" alt="logo" />
        </a>

        <Container>
          <Row className="navListe">
            <a href="https://cannesisup.com/#home">
              <Col className="style1 " md={3}>
                <img src="/assets/img/logocopie.png" alt="logo"></img>{" "}
              </Col>
            </a>
            <a href="https://cannesisup.com/">
              <Col className="style1 lienNavbar" md={3}>
                <p>ACCUEIL</p>
              </Col>
            </a>
            <Link to="/admin/annuaire">
              <Col className="style1 lienNavbar" md={3}>
                <p>Adhérents</p>
              </Col>
            </Link>
            <a
              href="https://cannesisup.com/#home"
              className={this.state.style}
              onClick={this.deconnexion}
            >
              <Col md={2}>
                <p>Deconnexion</p>
              </Col>
            </a>
          </Row>
        </Container>

        <Dropdown as={ButtonGroup} className="menuDeroulant">
          <Dropdown.Toggle className="btnMenu">MENU</Dropdown.Toggle>
          <Dropdown.Menu className="menuDeroulant">
            <Dropdown.Item href="https://cannesisup.com/#home">
              ACCUEIL
            </Dropdown.Item>
            <Dropdown.Item href="/admin/annuaire" />
            <Dropdown.Divider className={this.state.dropDownStyle} />
            <Dropdown.Item
              href="https://cannesisup.com/#home"
              className={this.state.dropDownStyle}
              onClick={this.deconnexion}
            >
              Deconnexion
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default NavAdmin;
