import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css";

import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchBAr from "../Annuaire/SearchBar/SearchBar";
import "./style.css";

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
      <Row key={index} className="styleCol" xs={12} sm={6} md={4}>
        <button>supprimer</button>
        <button>Passer actif</button>
        <button>Modifier</button>
        <Col>{element.nomDeSociete}</Col>
        <Col>{element.descriptionExhaustive}</Col>
        <Col>{element.secteurDactivite}</Col>
        <Col>{element.dirigeant.prenom}</Col>
        <Col>{element.dirigeant.nom}</Col>
        {/* // photoProfil={ */}
        {/* //   "http://localhost:8080/uploads/" + element.dirigeant.photoPortrait
          // }
          // couv={"http://localhost:8080/uploads/" + element.photoCouverture}
          // logo={"http://localhost:8080/uploads/" + element.logo} */}
      </Row>
    ));
  };

  render() {
    return (
      <div>
        coucou
        <Navbar />
        {/* Couverture  */}
        <div className="header">
          <h1>TOUT LES MEMBRES</h1>
        </div>
        {/* Barre de recherche  */}
        <SearchBAr />
        <div>
          <p className="nombreMembres">
            {" "}
            Nombres de membres : {this.state.allData.length}{" "}
          </p>
        </div>
        <div className="annuaireContainer">
          <Container>{this.affichageAllData()}</Container>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AnnuaireAdmin;
