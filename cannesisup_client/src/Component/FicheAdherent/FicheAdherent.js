import React, { Component } from "react";
import "../../../src/mainStyle.css";
import "./FicheAdherent.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
class FicheAdherent extends Component {
  render() {
    return (
      <div className="ficheadherent">
        {/* Fiche gauche */}
        <Card className="fichegauche">
          {/* Image couverture */}
          <Card.Img
            className="couverture"
            variant="top"
            src="/assets/img/fond_contact.jpg"
          />
          {/* Logo + liens PDF */}
          <Card.Body className="top-link">
            <Card.Img
              classeName="card-img"
              src="/assets/img/logo_entreprise2.png"
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
                <h4> Nom entreprise </h4>
                <p>
                  Nous créons de nouvelles expériences usagers, mobiles et
                  interactives, en élaborant des stratégies data-driven pour
                  maximiser les performances marketing.
                </p>
              </ListGroup.Item>
              {/* Secteur d'activité */}
              <ListGroup.Item className="description">
                <h3> Secteur d'activité </h3>
                <p style={{ fontWeight: 900 }}> Mobile Marketing Solution </p>
              </ListGroup.Item>
              {/* Coordonnées */}
              <ListGroup.Item className="description">
                <h3> Coordonnées </h3>
                <p>
                  {" "}
                  <span style={{ fontWeight: 700 }}>Adresse:</span> adresse{" "}
                </p>
                <p>
                  {" "}
                  <span style={{ fontWeight: 700 }}>
                    Téléphone:
                  </span> téléphone{" "}
                </p>
                <p>
                  {" "}
                  <span style={{ fontWeight: 700 }}>Email:</span> email{" "}
                </p>
                <a
                  target="_blank"
                  href="https://cannesisup.com/contact.php"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span style={{ fontWeight: 700 }}>Site web:</span> site web{" "}
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
          <Card.Img src="/assets/img/equipe/greg.jpg"></Card.Img>
          {/* Identité dirigeant */}
          <Card.Body className="dirigeant">
            <h3 style={{ padding: 0 }}> Dirigeant </h3>
            <p style={{ fontWeight: 900, margin: 0 }}> Nom du dirigeant </p>
            <p>Req.body.fonction</p>
            <h3> Parole de membre </h3>
            <p>
              {" "}
              J'ai les mains faites pour l'or et elles sont dans la merde.
              "Scarface"
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FicheAdherent;
