import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./AdminAnnuaire.css";
import { Link } from "react-router-dom";

import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchBAr from "../Annuaire/SearchBar/SearchBar";

class AnnuaireAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      etat: 0,
    };
  }

  // REQUETE GET TOUS LES ADHERENT DANS LA BDD AU CHARGEMENT DE LA PAGE
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    };

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

  // APRES LA REQUETE FETCH / COMPONENTDIDMOUNT , BOUCLE AFFICHAGE APPELEE DANS LE RENDER
  affichageAllData = () => {
    return this.state.allData.map((element, index) => (
      <Row key={index} className="styleRowAdmin styleRow">
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <button
            onClick={() => {
              this.suppression(element._id);
            }}
          >
            {" "}
            Supprimer
          </button>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          {" "}
          {this.status(element.estActif, element._id)}
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <Link to={"/admin/modif/adherent/" + element._id}>
            <button>Modifier</button>
          </Link>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <h3>{element.nomDeSociete}</h3>
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          {element.dirigeant.nom} {element.dirigeant.prenom}
        </Col>
        <Col className="styleColAdmin styleCol" xs={12} sm={6} md={2}>
          <a
            href={
              "mailto:" +
              element.mailPrive +
              "?&subject=A%20propos%20de%20votre%20compte%20CannesIsup"
            }
          >
            {element.mailPrive}
          </a>
        </Col>
      </Row>
    ));
  };

  // FONCTION SUPPRESSION D'UN ADHERENT
  suppression = (element) => {
    const action = prompt(
      "Etes vous sur de vouloir supprimer cet adherent? oui / non"
    );
    if (action == "non") {
      return;
    }

    axios
      .delete("http://localhost:8080/admin/delete", { data: { _id: element } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // FONCTION POUR PASSER UN STATUS D'ADHERENT A ACTIF
  passerStatusActif = (id) => {
    console.log(id);
    axios
      .put("http://localhost:8080/admin/status/true", { data: { _id: id } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // FONCTION POUR PASSER UN STATUS D'ADHERENT A INACTIF
  passerStatusInactif = (id) => {
    console.log(id);
    axios
      .put("http://localhost:8080/admin/status/false", { data: { _id: id } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // CHANGE LA COULEUR ET LE TEXTE DU BOUTON SUIVANT LE STATUS ACTIF/INACTIF
  status = (element, uid) => {
    if (element) {
      return (
        <button
          onClick={() => this.passerStatusInactif(uid)}
          className="boutonInactif"
        >
          Rendre inactif
        </button>
      );
    }
    return (
      <button
        onClick={() => this.passerStatusActif(uid)}
        className="boutonActif"
      >
        Rendre actif
      </button>
    );
  };

  // RENDER DE LA PAGE
  render() {
    return (
      <div>
        <Navbar />
        <div className="header">
          <h1>TOUS LES MEMBRES</h1>
        </div>
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
                <h4>Status</h4>
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
