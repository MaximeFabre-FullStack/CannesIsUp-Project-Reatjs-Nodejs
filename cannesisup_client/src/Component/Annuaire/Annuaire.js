import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../../../src/mainStyle.css";
import "../SignUp/style.css";
import "./Annuaire.css";

import CarteAnnuaire from "./CarteAnnuaire/CarteAnnuaire";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import InfiniteScroll from "react-infinite-scroll-component";
import SearchField from "react-search-field";

class Annuaire extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* Couverture  */}
        <div className="couverture">
          <h1>ANNUAIRE DES MEMBRES</h1>
        </div>
        {/* Barre de recherche  */}
        <div className="barreRecherche">
          <SearchField
            placeholder="Recherchez : un membre, une activité, un mot clé..."
            className="react-search-field"
          />
        </div>
        <div className="annuaireContainer">
          {/* <InfiniteScroll> */}
          <Container>
            <Row>
              <Col className="style1" xs={12} sm={6} md={4}>
                1
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                2
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                3
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                4
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                1
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                2
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                3
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                4
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                1
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                2
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                3
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                4
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                1
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                2
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                3
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                4
              </Col>
            </Row>
          </Container>
          {/* </InfiniteScroll> */}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Annuaire;
