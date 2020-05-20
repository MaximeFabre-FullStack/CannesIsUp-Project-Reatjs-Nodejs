import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css";

import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchBAr from "../Annuaire/SearchBar/SearchBar";

class AnnuaireAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
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
    fetch("http://localhost:8080/admin", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ allData: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  // A TESTER < BACK OK /!\
  // suppression = (element) => {
  //   const body = {
  //   _id: element;
  //    }
  //   console.log(body);

  //   axios({
  //     method: "DELETE",
  //     url: "http://localhost:8080/admin/delete",
  //     data: JSON,
  //     body: body,
  //   });
  // };

  affichageAllData = () => {
    return this.state.allData.map((element, index) => (
      <Row key={index} className="styleRowAdmin styleRow">
        <Col className="styleColAdmin  styleCol" xs={12} sm={6} md={2}>
          <button>Supprimer</button>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <button>Passer actif</button>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <button>Modifier</button>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <h3>{element.nomDeSociete}</h3>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          {element.dirigeant.nom} {element.dirigeant.prenom}
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <a href="mailto:">{element.mailPrive}</a>
        </Col>
      </Row>
    ));
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* Couverture  */}
        <div className="header">
          <h1>TOUS LES MEMBRES</h1>
        </div>
        {/* Barre de recherche  */}
        <SearchBAr />
        <div>
          <p className="nombreMembres">
            {" "}
            Nombres de membres : {this.state.allData.length}{" "}
          </p>
        </div>
        <div className="annuaireContainerAdmin">
          <Container>
            <Row className="styleRowAdmin">
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Supprimer</h4>
              </Col>
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Passer actif</h4>
              </Col>
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Modifier</h4>
              </Col>
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Nom entreprise</h4>
              </Col>
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Nom dirigeant</h4>
              </Col>
              <Col className="styleCol styleColAdmin" xs={12} sm={6} md={2}>
                <h4>Mail dirigeant</h4>
              </Col>
            </Row>
            {this.affichageAllData()}
          </Container>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AnnuaireAdmin;
