import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../../../src/mainStyle.css";
import "../SignUp/style.css";
import "./Annuaire.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import InfiniteScroll from "react-infinite-scroll-component";

class Annuaire extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
