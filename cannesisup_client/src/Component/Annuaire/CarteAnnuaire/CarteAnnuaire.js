import React, { Component } from "react";
import "../../../../src/mainStyle.css";
import "./CarteAnnuaire.css";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import url from "../../../url.json";

import { Link } from "react-router-dom";

class CarteAnnuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  limitText = (text) => {
    return text.substr(0, 250);
  };

  checkPicture = () => {
    if (
      this.props.photoProfil ===
      url["url-server"] + "/uploads/photoportrait"
    ) {
      return (
        <img
          className="photoProfil"
          src="/assets/img/avatar.png"
          alt="no profil img"
        />
      );
    } else {
      return (
        <img
          className="photoProfil"
          src={this.props.photoProfil}
          alt="profil"
        />
      );
    }
  };

  checkCouv = () => {
    if (this.props.couv === url["url-server"] + "/uploads/photocouv") {
      return (
        <Card.Img
          className="couverture"
          variant="top"
          src="/assets/img/fond_equipe.png"
          alt="couverture"
        />
      );
    } else {
      return (
        <Card.Img
          className="couverture"
          variant="top"
          src={this.props.couv}
          alt="couverture"
        />
      );
    }
  };

  render() {
    return (
      <div>
        <Card className="carteAnnuaire">
          {/* Couverture */}
          {this.checkCouv()}
          {/* Photo de profil  */}
          {this.checkPicture()}
          {/* Logo entreprise */}
          <div className="logo-container">
            <img className="logoSociete" src={this.props.logo} alt="" />
          </div>

          {/* Description  */}
          <Card.Body className="description">
            <ListGroup>
              <ListGroup.Item className="item">
                <h4 style={{ paddingTop: 5, paddingBottom: 5, fontSize: 24 }}>
                  {this.props.nomDeSociete}
                </h4>
                <p className="paragraph">
                  {this.limitText(this.props.descriptionExhaustive)}
                </p>
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
              <Link to={"/ficheadherent/" + this.props.id}>
                <button className="btn-default">Voir le membre</button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CarteAnnuaire;
