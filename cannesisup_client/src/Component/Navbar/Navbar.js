import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Dropdown, ButtonGroup } from "react-bootstrap";

import "../../../src/mainStyle.css";
import "./Navbar.css";

class Navbar extends Component {
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
      this.setState({ style: "style1 navLink" }); // change le style de la navbar si connecté
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
              <Col className="style1" md={1.2}>
                <img src="/assets/img/logocopie.png" alt="logo"></img>{" "}
              </Col>
            </a>
            <a href="https://cannesisup.com/">
              <Col className="style1 lienSite navLink" md={1.2}>
                ACCUEIL
              </Col>
            </a>
            <Link to="/signup">
              <Col className="style1 navLink" md={1.2}>
                Devenez adhérent
              </Col>
            </Link>
            <a href="https://cannesisup.com/#dda">
              <Col className="style1 navLink" md={1.2}>
                DDA îles de Lerins
              </Col>
            </a>
            <a href="https://cannesisup.com/#actus">
              <Col className="style1 navLink" md={1.2}>
                Actualités
              </Col>
            </a>
            <Link to="/annuaire">
              <Col className="style1 navLink" md={1.2}>
                Adhérents
              </Col>
            </Link>
            <a href="https://cannesisup.com/equipe.php">
              <Col className="style1 navLink" md={1.2}>
                L'équipe
              </Col>
            </a>
            <a href="https://cannesisup.com/#partenaires">
              <Col className="style1 navLink" md={1.2}>
                Partenaires
              </Col>
            </a>
            <a
              href="https://cannesisup.com/contact.php"
              className="lienContact"
            >
              <Col className="style1 navLink" md={1.2}>
                Contact
              </Col>
            </a>
            <a
              href="https://cannesisup.com/#home"
              className={this.state.style}
              onClick={this.deconnexion}
            >
              <Col md={1.2}>Deconnexion</Col>
            </a>
          </Row>
        </Container>

        <Dropdown as={ButtonGroup} className="menuDeroulant">
          <Dropdown.Toggle className="btnMenu">MENU</Dropdown.Toggle>
          <Dropdown.Menu className="menuDeroulant">
            <Dropdown.Item href="https://cannesisup.com/#home">
              Home
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/contact.php">
              Devenez adherent
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/#dda">
              DDA iles de Lerins
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/#actus">
              Actualités
            </Dropdown.Item>
            <Dropdown.Item href="/annuaire">Adhérents</Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/equipe.php">
              L'équipe
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/#partenaires">
              Partenaires
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/#dda">
              DDA iles de Lerins
            </Dropdown.Item>
            <Dropdown.Item href="https://cannesisup.com/contact.php">
              Contact
            </Dropdown.Item>
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
export default Navbar;
