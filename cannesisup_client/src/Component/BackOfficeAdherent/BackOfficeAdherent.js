import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Footer from "../Footer/Footer";
import axios from "axios";
import NavbarAdherent from "../Navbar/NavbarAdherent/NavbarAdherent";

import "../../../src/mainStyle.css";
import "./style.css";

class BackOfficeAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAdherent: { coordonnes: {}, dirigeant: {}, reseauSociaux: {} },
      selectedFile: null,
      isEditing: false,
    };
    this.inputPhotoCouv = React.createRef();
    this.inputLogo = React.createRef();
    this.inputDossierPresentation = React.createRef();
    this.inputPhotoPortrait = React.createRef();
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
          this.setState({ dataAdherent: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /* Envoi du nouveau fichier*/
  fileSelectedHandler = (event) => {
    const formData = new FormData();
    formData.append(
      event.target.name,
      event.target.files[0],
      event.target.files[0].name
    );

    /* envoi de la requete */
    axios({
      method: "put",
      url:
        "http://localhost:8080/adherents/updateFile/" +
        this.props.match.params.id,
      data: formData,
    }).then((res) => {
      console.log(res); // recharger la page ?
    });
  };

  updatePhotoCouv = (e) => {
    this.inputPhotoCouv.current.click();
  };

  updateLogo = (e) => {
    this.inputLogo.current.click();
  };

  updateDossierPresentation = (e) => {
    this.inputDossierPresentation.current.click();
  };

  updatePhotoPortrait = (e) => {
    this.inputPhotoPortrait.current.click();
  };

  onClickEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  onSaveEdit = () => {
    this.setState({
      isEditing: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      dataAdherent: {
        ...this.state.dataAdherent,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="maindiv">
        <NavbarAdherent />
        <div className="adherent-page-container">
          <div className="header-back-office">
            <h3>
              Bienvenue dans votre espace{" "}
              {this.state.dataAdherent.dirigeant.prenom}{" "}
              {this.state.dataAdherent.dirigeant.nom} !
            </h3>
          </div>

          <div className="ficheadherent-back">
            {/* Fiche gauche */}
            <Card className="fichegauche">
              {/* Image couverture */}
              <Card.Img
                className="couverture editable-img"
                variant="top"
                src={
                  "http://localhost:8080/uploads/" +
                  this.state.dataAdherent.photoCouverture
                }
                onClick={this.updatePhotoCouv}
              />
              <input
                onChange={this.fileSelectedHandler}
                ref={this.inputPhotoCouv}
                type="file"
                style={{ display: "none" }}
                name="couv"
              />

              {/* Logo + liens PDF */}
              <Card.Body className="top-link">
                <div className="logo-cont editable-img">
                  <Card.Img
                    className="card-img"
                    src={
                      "http://localhost:8080/uploads/" +
                      this.state.dataAdherent.logo
                    }
                    onClick={this.updateLogo}
                  />
                  <input
                    onChange={this.fileSelectedHandler}
                    ref={this.inputLogo}
                    type="file"
                    style={{ display: "none" }}
                    name="logo"
                  />
                </div>

                <div className="download-container">
                  <p className="download-txt">
                    Modifier la brochure de la société
                  </p>
                  <img
                    className="download-img editable-img"
                    src="/assets/img/download-solid.svg"
                    alt="logo"
                    onClick={this.updateDossierPresentation}
                  />
                  <input
                    onChange={this.fileSelectedHandler}
                    ref={this.inputDossierPresentation}
                    type="file"
                    style={{ display: "none" }}
                    name="dossier"
                  />
                </div>
              </Card.Body>

              {/* Description entreprise */}
              <Card.Body className="blockCard">
                <ListGroup variant="flush">
                  {/* Nom + texte */}
                  <ListGroup.Item className="description">
                    {this.state.isEditing ? (
                      ""
                    ) : (
                      <h4 className="editable">
                        {this.state.dataAdherent.nomDeSociete}
                      </h4>
                    )}
                    {this.state.isEditing ? (
                      <span>
                        <input
                          value={this.state.dataAdherent.nomDeSociete}
                          type="text"
                          name="nomDeSociete"
                          onChange={this.handleChange}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                    {this.state.isEditing ? (
                      ""
                    ) : (
                      <button onClick={this.onClickEdit}>Edit</button>
                    )}
                    <button onClick={this.onSaveEdit}>Save</button>
                    <p className="justify editable">
                      {this.state.dataAdherent.descriptionExhaustive}
                    </p>
                  </ListGroup.Item>

                  {/* Secteur d'activité */}
                  <ListGroup.Item className="description">
                    <h3> Secteur d'activité </h3>
                    <p className="editable" style={{ fontWeight: 900 }}>
                      {" "}
                      {this.state.dataAdherent.secteurDactivite}{" "}
                    </p>
                  </ListGroup.Item>

                  {/* Coordonnées */}
                  <ListGroup.Item className="description">
                    <h3> Coordonnées </h3>
                    <p className="editable">
                      <span style={{ fontWeight: 700 }}>Adresse: </span>
                      {this.state.dataAdherent.coordonnes.adresse
                        ? this.state.dataAdherent.coordonnes.adresse
                        : " "}
                    </p>
                    <p className="editable">
                      <span style={{ fontWeight: 700 }}>Téléphone: </span>
                      {this.state.dataAdherent.coordonnes.telephone
                        ? this.state.dataAdherent.coordonnes.telephone
                        : " "}
                    </p>
                    <p className="editable">
                      <span style={{ fontWeight: 700 }}>Email: </span>
                      {this.state.dataAdherent.coordonnes.mailSociete
                        ? this.state.dataAdherent.coordonnes.mailSociete
                        : " "}
                    </p>
                    <p className="editable">
                      {" "}
                      <span style={{ fontWeight: 700 }}>Site web:</span>
                      <a
                        target="_blank"
                        href="https://cannesisup.com/contact.php"
                        rel="noopener noreferrer"
                      >
                        {this.state.dataAdherent.coordonnes.siteWeb
                          ? this.state.dataAdherent.coordonnes.siteWeb
                          : " "}
                      </a>
                    </p>
                  </ListGroup.Item>

                  {/* Réseaux sociaux */}
                  <ListGroup.Item className="description">
                    <h3> Réseaux sociaux </h3>
                    <a
                      href={this.state.dataAdherent.reseauSociaux.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/facebook.svg"
                        alt="facebook"
                        className="reseaux-logo "
                      />
                    </a>
                    <a
                      href={this.state.dataAdherent.reseauSociaux.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/instagram.svg"
                        alt="instagram"
                        className="reseaux-logo ml-20"
                      />
                    </a>
                    <a
                      href={this.state.dataAdherent.reseauSociaux.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/linkedin.svg"
                        alt="linkedin"
                        className="reseaux-logo ml-20"
                      />
                    </a>
                    <a
                      href={this.state.dataAdherent.reseauSociaux.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/twitter.svg"
                        alt="twitter"
                        className="reseaux-logo ml-20"
                      />
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            {/* Fiche droite */}
            <Card className="fichedroite">
              {/* Photo de profil */}
              <Card.Img
                className="editable-img"
                src={
                  "http://localhost:8080/uploads/" +
                  this.state.dataAdherent.dirigeant.photoPortrait
                }
                onClick={this.updatePhotoPortrait}
              />
              <input
                onChange={this.fileSelectedHandler}
                ref={this.inputPhotoPortrait}
                type="file"
                style={{ display: "none" }}
                name="photoPortrait"
              />
              {/* Identité dirigeant */}
              <Card.Body className="dirigeant">
                <h3 style={{ padding: 0 }}> Dirigeant </h3>
                <p className="editable" style={{ fontWeight: 900, margin: 0 }}>
                  {" "}
                  {this.state.dataAdherent.dirigeant.prenom}{" "}
                  {this.state.dataAdherent.dirigeant.nom}{" "}
                </p>
                <p className="editable">
                  {this.state.dataAdherent.dirigeant.fonction}
                </p>
                <h3> Parole de membre </h3>
                <p className="justify editable">
                  {" "}
                  {this.state.dataAdherent.dirigeant.paroleDeMembre}
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default BackOfficeAdherent;
