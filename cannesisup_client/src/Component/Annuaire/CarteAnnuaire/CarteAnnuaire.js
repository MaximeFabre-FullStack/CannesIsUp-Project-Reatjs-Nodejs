import React, { Component } from "react";
import "../../../../src/mainStyle.css";
import "./CarteAnnuaire.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class CarteAnnuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card className="carteAnnuaire">
          {/* Couverture */}
          <Card.Img
            className="couverture"
            variant="top"
            src={this.props.couv}
            alt=""
          />
          {/* Photo de profil  */}
          <img
            className="photoProfil"
            src={this.props.photoProfil}
            alt="coucou"
          />
          {/* Logo entreprise */}
          <img className="logoSociete" src={this.props.logo} alt="" />
          {/* Description  */}
          <Card.Body className="description">
            <ListGroup>
              <ListGroup.Item className="item">
                <h4 style={{ padding: 0, fontSize: 24 }}>
                  {this.props.nomDeSociete}
                </h4>
                <p>{this.props.descriptionExhaustive}</p>
              </ListGroup.Item>
              <ListGroup.Item className="item">
                <h3 style={{ padding: 0 }}>Secteur d'activité</h3>
                <p style={{ fontWeight: 900 }}>{this.props.secteurDactivite}</p>
              </ListGroup.Item>
              <ListGroupItem className="item">
                <h3 style={{ padding: 0 }}> Dirigeant </h3>
                <p style={{ fontWeight: 900, margin: 0 }}>
                  {this.props.prenom} {this.props.nom}
                </p>
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
