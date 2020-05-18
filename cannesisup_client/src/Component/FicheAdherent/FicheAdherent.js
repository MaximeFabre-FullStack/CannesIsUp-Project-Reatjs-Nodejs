/* imports */
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "../../../src/mainStyle.css";
import "./FicheAdherent.css";

/* Component */
class FicheAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAdherent: { coordonnes: {}, dirigeant: {} },
    };
  }

  componentDidMount() {
    const body = {
      id: "5ebe8c03b490401890beb16e",
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
          this.setState({ dataAdherent: data });
          console.log(this.state.dataAdherent);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="ficheadherent">
        {/* Fiche gauche */}
        <Card className="fichegauche">
          {/* Image couverture */}
          <Card.Img
            className="couverture"
            variant="top"
            src={
              "http://localhost:8080/uploads/" +
              this.state.dataAdherent.photoCouverture
            }
          />
          {/* Logo + liens PDF */}
          <Card.Body className="top-link">
            <Card.Img
              classeName="card-img"
              src={
                "http://localhost:8080/uploads/" + this.state.dataAdherent.logo
              }
            ></Card.Img>
            <Card.Link
              classeName="card-link"
              href="https://react-bootstrap.github.io/components/cards/#title-text-and-links"
            >
              <p
                style={{
                  textAlign: "right",
                  width: "75%",
                  paddingLeft: "35%",
                  marginTop: "5%",
                }}
              >
                Télécharger la brochure de la société
              </p>
              <img
                className="arrow"
                src="/assets/img/arrow.png"
                alt="logo"
              ></img>
            </Card.Link>
          </Card.Body>

          {/* Description entreprise */}
          <Card.Body className="blockCard">
            <ListGroup variant="flush">
              {/* Nom + texte */}
              <ListGroup.Item className="description">
                <h4> {this.state.dataAdherent.nomDeSociete} </h4>
                <p>{this.state.dataAdherent.descriptionExhaustive}</p>
              </ListGroup.Item>

              {/* Secteur d'activité */}
              <ListGroup.Item className="description">
                <h3> Secteur d'activité </h3>
                <p style={{ fontWeight: 900 }}>
                  {" "}
                  {this.state.dataAdherent.secteurDactivite}{" "}
                </p>
              </ListGroup.Item>

              {/* Coordonnées */}
              <ListGroup.Item className="description">
                <h3> Coordonnées </h3>
                <p>
                  <span style={{ fontWeight: 700 }}>Adresse:</span>
                  {this.state.dataAdherent.coordonnes.adresse
                    ? this.state.dataAdherent.coordonnes.adresse
                    : " "}
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>Téléphone:</span>
                  {this.state.dataAdherent.coordonnes.telephone
                    ? this.state.dataAdherent.coordonnes.telephone
                    : " "}
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>Email:</span>{" "}
                  {this.state.dataAdherent.coordonnes.mailSociete
                    ? this.state.dataAdherent.coordonnes.mailSociete
                    : " "}
                </p>
                <a
                  target="_blank"
                  href="https://cannesisup.com/contact.php"
                  rel="noopener noreferrer"
                >
                  <span style={{ fontWeight: 700 }}>Site web:</span>{" "}
                  {this.state.dataAdherent.coordonnes.siteWeb
                    ? this.state.dataAdherent.coordonnes.siteWeb
                    : " "}
                </a>
              </ListGroup.Item>
              {/* Réseaux sociaux */}
              <ListGroup.Item className="description">
                <h3> Réseaux sociaux </h3>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Fiche droite */}
        <Card className="fichedroite">
          {/* Photo de profil */}
          <Card.Img
            src={
              "http://localhost:8080/uploads/" +
              this.state.dataAdherent.dirigeant.photoPortrait
            }
          ></Card.Img>
          {/* Identité dirigeant */}
          <Card.Body className="dirigeant">
            <h3 style={{ padding: 0 }}> Dirigeant </h3>
            <p style={{ fontWeight: 900, margin: 0 }}>
              {" "}
              {this.state.dataAdherent.dirigeant.prenom}{" "}
              {this.state.dataAdherent.dirigeant.nom}{" "}
            </p>
            <p>{this.state.dataAdherent.dirigeant.fonction}</p>
            <h3> Parole de membre </h3>
            <p> {this.state.dataAdherent.dirigeant.paroleDeMembre}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FicheAdherent;
