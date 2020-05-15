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

class Annuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BDDdata: [],
    };
  }

  /* requete GET */
  componentDidMount() {
    /* Options, paramètres de la requête */
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    };

    /* Requête */
    fetch("http://localhost:8080/visiteurs", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ BDDdata: data });
          console.log(this.state.BDDdata[0]._id);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  affichageAnnuaire = () => {
    return this.state.BDDdata.map((element, index) => (
      <div key={index}>
        <Col className="style1" xs={12} sm={6} md={4}>
          <p>{element._id}</p>
          <CarteAnnuaire />
        </Col>
      </div>
    ));
  };

  render() {
    return (
      <div>
        {/* <Navbar />*/}

        <div className="annuaireContainer">
          {/* <InfiniteScroll> */}
          <Container>
            <Row>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire />
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
