import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./AdminModifAdherent.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

class AdminModifAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adherentData: { coordonnes: {}, dirigeant: {}, reseauSociaux: {} },
    };
  }
  componentDidMount() {
    const body = {
      id: this.props.match.params.id,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Requête */
    fetch("http://localhost:8080/visiteurs/adherent", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ adherentData: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="maindiv">
        <Navbar />

        <div className="headerMembres">
          <h1>MODIFICATION MEMBRE</h1>
        </div>
        <br />
        <br />

        <h2>Dirigieant: </h2>
        <Container className="containerAdmin">
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Prénom dirigeant: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.dirigeant.prenom}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Nom dirigeant: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.dirigeant.nom}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="lastCol">
              <h4>Fonction: </h4>
            </Col>
            <Col className="lastCol">
              {this.state.adherentData.dirigeant.fonction}
            </Col>
          </Row>
        </Container>

        <h2>Societe: </h2>
        <Container className="containerAdmin">
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Nom de societe: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.nomDeSociete}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Description exhaustive: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.descriptionExhaustive}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="lastCol">
              <h4>Secteur d'activité: </h4>
            </Col>
            <Col className="lastCol">
              {this.state.adherentData.secteurDactivite}
            </Col>
          </Row>
        </Container>

        <h2>Coordonnées:</h2>
        <Container className="containerAdmin">
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Coordonnées: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.coordonnes.adresse}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Téléphone: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.coordonnes.telephone}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Mail societe: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.coordonnes.mailSociete}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="lastCol">
              <h4>Site web: </h4>
            </Col>
            <Col className="lastCol">
              {this.state.adherentData.coordonnes.siteWeb}
            </Col>
          </Row>
        </Container>

        <h2>Reseaux:</h2>
        <Container className="containerAdmin">
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Réseaux sociaux: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.reseauSociaux.facebook}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Réseaux sociaux: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.reseauSociaux.instagram}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="styleColAdminModif">
              <h4>Réseaux sociaux: </h4>
            </Col>
            <Col className="styleColAdminModif">
              {this.state.adherentData.reseauSociaux.linkedin}
            </Col>
          </Row>
          <Row className="styleRowAdminModif">
            <Col className="lastCol">
              <h4>Réseaux sociaux: </h4>
            </Col>
            <Col className="lastCol">
              {this.state.adherentData.reseauSociaux.twitter}
            </Col>
          </Row>
          {/* <Row>
          <Col>Portrait dirigeant: </Col>
          <Col>{this.state.adherentData.dirigeant.photoPortrait}</Col>
        </Row>
        <Row>
          <Col>Photo de couverture: </Col>
          <Col>
            <img
              className="couverture"
              variant="top"
              src={
                "http://localhost:8080/uploads/" +
                this.state.adherentData.photoCouverture
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>Logo d'entreprise: </Col>
          <Col>
            <img
              className="card-img"
              src={
                "http://localhost:8080/uploads/" + this.state.adherentData.logo
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>Brochure de la société: </Col>
          <Col>
            <a
              href={
                "http://localhost:8080/uploads/" +
                this.state.adherentData.dossierPresentation
              }
              target="_blank"
              rel="noopener noreferrer"
            />
          </Col>
        </Row> */}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default AdminModifAdherent;
