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
import SearchBAr from "./SearchBar/SearchBar";

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
          console.log(this.state.BDDdata[0].logo);
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
          <CarteAnnuaire
            nomDeSociete={element.nomDeSociete}
            descriptionExhaustive={element.descriptionExhaustive}
            secteurDactivite={element.secteurDactivite}
            prenom={element.dirigeant.prenom}
            nom={element.dirigeant.nom}
            photo={"http://localhost:8080/" + element.dirigeant.photoPortrait}
            couv={"http://localhost:8080/" + element.photoCouverture}
            logo={"http://localhost:8080/" + element.logo}
          />
        </Col>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* Couverture  */}
        <div className="couverture">
          <h1>ANNUAIRE DES MEMBRES</h1>
        </div>
        {/* Barre de recherche  */}
        <SearchBAr />
        <div className="annuaireContainer">
          {/* <InfiniteScroll> */}
          <Container>
            <Row>
              <Col className="style1" xs={12} sm={6} md={4}>
                {this.affichageAnnuaire()}
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire activite="toto" />
              </Col>
              <Col className="style1" xs={12} sm={6} md={4}>
                <CarteAnnuaire activite="titi" />
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
