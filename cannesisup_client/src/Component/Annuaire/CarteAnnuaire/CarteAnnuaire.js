import React, { Component } from "react";
import "../../../../src/mainStyle.css";
import "./CarteAnnuaire.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class CarteAnnuaire extends Component {
  render() {
    return (
      <div>
        <Card className="carteAnnuaire">
          {/* Couverture */}
          <Card.Img
            className="couverture"
            variant="top"
            src="/assets/img/fond_contact.jpg"
          />
          {/* Photo de profil  */}
          <img className="photoProfil" src="/assets/img/equipe/greg.jpg" />
          {/* Logo entreprise */}
          <img className="logoSociete" src="/assets/img/logo_entreprise2.png" />
          {/* Description  */}
          <Card.Body className="description">
            <ListGroup>
              <ListGroup.Item className="item">
                <h4 style={{ padding: 0, fontSize: 24 }}> Nom entreprise </h4>
                <p>
                  Nous créons de nouvelles expériences usagers, mobiles et
                  interactives, en élaborant des stratégies data-driven pour
                  maximiser les performances marketing.
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="item">
                <h3 style={{ padding: 0 }}> Secteur d'activité </h3>
                <p style={{ fontWeight: 900 }}> Mobile Marketing Solution </p>
              </ListGroup.Item>
              <ListGroupItem className="item">
                <h3 style={{ padding: 0 }}> Dirigeant </h3>
                <p style={{ fontWeight: 900, margin: 0 }}> Nom du dirigeant </p>
              </ListGroupItem>
            </ListGroup>
            {/* Bouton */}
            <div className="btn">
              <button className="btn-default">Voir le membre</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CarteAnnuaire;
