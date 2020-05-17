import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Dropdown, ButtonGroup } from "react-bootstrap";

import "../../../src/mainStyle.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="bande"></div>
        <a href="https://cannesisup.com/#home" className="logoNav">
          <img src="./assets/img/logocopie.png" alt="logo"></img>{" "}
        </a>

        <Container>
          <Row className="navListe">
            <a href="https://cannesisup.com/#home">
              <Col className="style1" md={1.2}>
                <img src="./assets/img/logocopie.png" alt="logo"></img>{" "}
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
            <Link to="/signin">
              <Col className="style1 navLink" md={1.2}>
                Sign-in
              </Col>
            </Link>
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
            <Dropdown.Item>
              <Link to="/annuaire">Adhérents</Link>
            </Dropdown.Item>
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
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to="/signin">Sign in</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/signup">Sign up</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

    // return (
    //   <div className="navbarContainer">
    //     <div className="bande"></div>
    //     <div className="navbarHeader">
    //       <a href="https://cannesisup.com/#home">
    //         <img src="./assets/img/logocopie.png" alt="logo"></img>
    //       </a>
    //     </div>
    //     <div id="navbar">
    //       <ul className="navListe">
    //         <li>
    //           <a href="https://cannesisup.com/">ACCUEIL</a>
    //         </li>

    //         <li>
    //           <a href="https://cannesisup.com/contact.php">Devenez adhérent</a>
    //         </li>

    //         <li>
    //           <a href="https://cannesisup.com/#dda">DDA îles de Lerins</a>
    //         </li>

    //         <li>
    //           <a href="https://cannesisup.com/#actus">Actualités</a>
    //         </li>

    //         {/* <li>
    //            <a href="">Adhérents</a>
    //         </li> */}

    //         <li>
    //           <a href="https://cannesisup.com/equipe.php">L'équipe</a>
    //         </li>

    //         <li>
    //           <a href="https://cannesisup.com/#partenaires">Partenaires</a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://cannesisup.com/contact.php"
    //             className="lienContact"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // );
  }
}
export default Navbar;
