import React, { Component } from "react";
import {
  Card,
  ListGroup,
  Accordion,
  Form,
  Modal,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import axios from "axios";
import NavbarAdherent from "../Navbar/NavbarAdherent/NavbarAdherent";
import url from "../../url.json";

import "../../../src/mainStyle.css";
import "./style.css";

class BackOfficeAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAdherent: {
        coordonnes: {},
        dirigeant: {},
        reseauSociaux: {},
      },
      selectedFile: null,
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
    fetch(url["url-server"] + "/visiteurs/adherent", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({ dataAdherent: data });
          console.log(this.state);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // Envoi du nouveau fichier
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
        url["url-server"] +
        "adherents/updateFile/" +
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

  // Modification des infos texte
  handleChangeModifications = async (e) => {
    // await this.setState({ [e.target.name]: e.target.value });
    await this.setState({
      dataAdherent: {
        ...this.state.dataAdherent,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleChangeModificationsDirigeant = async (e) => {
    await this.setState({
      dataAdherent: {
        ...this.state.dataAdherent,
        dirigeant: {
          ...this.state.dataAdherent.dirigeant,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  handleChangeModificationsCoordonnes = async (e) => {
    await this.setState({
      dataAdherent: {
        ...this.state.dataAdherent,
        coordonnes: {
          ...this.state.dataAdherent.coordonnes,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  handleChangeModificationsReseaux = async (e) => {
    await this.setState({
      dataAdherent: {
        ...this.state.dataAdherent,
        reseauSociaux: {
          ...this.state.dataAdherent.reseauSociaux,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  onSaveUpdate = (e) => {
    const body = this.state.dataAdherent;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch(url["url-server"] + "/adherents/updateInput", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({ dataAdherent: data.data });
        },
        (error) => {
          console.log(error);
        }
      );
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
            <button className="btn-default" onClick={this.onSaveUpdate}>
              Valider les modifications
            </button>
          </div>

          <div className="ficheadherent-back">
            {/* Fiche gauche */}
            <Card className="fichegauche">
              {/* Image couverture */}
              <Card.Img
                className="couverture editable-img"
                variant="top"
                src={
                  url["url-server"] +
                  "/uploads/" +
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
                      url["url-server"] +
                      "/uploads/" +
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
                    {/* Nom de societe*/}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <h4 className="editable">
                              {this.state.dataAdherent.nomDeSociete}
                            </h4>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="nomDeSociete"
                                    onChange={this.handleChangeModifications}
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.nomDeSociete
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Description*/}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable justify ">
                              {this.state.dataAdherent.descriptionExhaustive}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="descriptionExhaustive"
                                    onChange={this.handleChangeModifications}
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent
                                        .descriptionExhaustive
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </ListGroup.Item>

                  {/* Secteur d'activité */}
                  <ListGroup.Item className="description">
                    <h3> Secteur d'activité </h3>
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable">
                              {this.state.dataAdherent.secteurDactivite}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="secteurDactivite"
                                    onChange={this.handleChangeModifications}
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.secteurDactivite
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </ListGroup.Item>

                  {/* Coordonnées */}
                  <ListGroup.Item className="description">
                    <h3> Coordonnées </h3>

                    {/* Adresse */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable">
                              <span style={{ fontWeight: 700 }}>Adresse: </span>
                              {this.state.dataAdherent.coordonnes.adresse
                                ? this.state.dataAdherent.coordonnes.adresse +
                                  ", "
                                : " "}
                              {this.state.dataAdherent.coordonnes
                                .complementDadresse
                                ? this.state.dataAdherent.coordonnes
                                    .complementDadresse + ", "
                                : " "}
                              {this.state.dataAdherent.coordonnes.codePostal
                                ? this.state.dataAdherent.coordonnes
                                    .codePostal + " "
                                : " "}
                              {this.state.dataAdherent.coordonnes.ville
                                ? this.state.dataAdherent.coordonnes.ville + " "
                                : " "}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="adresse"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes.adresse
                                    }
                                  />
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="complementDadresse"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes
                                        .complementDadresse
                                    }
                                  />
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="codePostal"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes
                                        .codePostal
                                    }
                                  />
                                </Col>
                              </Form.Group>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="ville"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes.ville
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Telephone */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable">
                              <span style={{ fontWeight: 700 }}>
                                Téléphone:{" "}
                              </span>
                              {this.state.dataAdherent.coordonnes.telephone
                                ? this.state.dataAdherent.coordonnes.telephone
                                : " "}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="telephone"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes
                                        .telephone
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Mail Societe */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable">
                              <span style={{ fontWeight: 700 }}>Email: </span>
                              {this.state.dataAdherent.coordonnes.mailSociete
                                ? this.state.dataAdherent.coordonnes.mailSociete
                                : " "}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="mailSociete"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes
                                        .mailSociete
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Site Web */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <p className="editable">
                              {" "}
                              <span style={{ fontWeight: 700 }}>
                                Site web:
                              </span>{" "}
                              {this.state.dataAdherent.coordonnes.siteWeb
                                ? this.state.dataAdherent.coordonnes.siteWeb
                                : " "}
                            </p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="siteWeb"
                                    onChange={
                                      this.handleChangeModificationsCoordonnes
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.coordonnes
                                        .mailSociete
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </ListGroup.Item>

                  {/* Réseaux sociaux */}
                  <ListGroup.Item className="description">
                    <h3> Réseaux sociaux </h3>

                    {/* Facebook */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <div className="reseau-container">
                              <img
                                src="/assets/img/facebook.svg"
                                alt="facebook"
                                id="facebook"
                              />
                              {this.state.dataAdherent.reseauSociaux.facebook}
                            </div>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="facebook"
                                    onChange={
                                      this.handleChangeModificationsReseaux
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.reseauSociaux
                                        .facebook
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Instagram */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <div className="reseau-container">
                              <img
                                src="/assets/img/instagram.svg"
                                alt="instagram"
                                id="instagram"
                              />
                              {this.state.dataAdherent.reseauSociaux.instagram}
                            </div>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="instagram"
                                    onChange={
                                      this.handleChangeModificationsReseaux
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.reseauSociaux
                                        .instagram
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Linkedin */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <div className="reseau-container">
                              <img
                                src="/assets/img/linkedin.svg"
                                alt="linkedin"
                                id="linkedin"
                              />
                              {this.state.dataAdherent.reseauSociaux.linkedin}
                            </div>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="linkedin"
                                    onChange={
                                      this.handleChangeModificationsReseaux
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.reseauSociaux
                                        .linkedin
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {/* Twitter */}
                    <Accordion>
                      <Card className="accordeon-card">
                        <Card.Header className="accordeon-header">
                          <Accordion.Toggle
                            className="accordeon-btn"
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <div className="reseau-container">
                              <img
                                src="/assets/img/twitter.svg"
                                alt="twitter"
                                id="twitter"
                              />
                              {this.state.dataAdherent.reseauSociaux.twitter}
                            </div>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Form>
                              <Form.Group as={Row}>
                                <Col sm="10">
                                  <Form.Control
                                    name="twitter"
                                    onChange={
                                      this.handleChangeModificationsReseaux
                                    }
                                    className="accordion-input"
                                    plaintext
                                    defaultValue={
                                      this.state.dataAdherent.reseauSociaux
                                        .twitter
                                    }
                                  />
                                </Col>
                              </Form.Group>
                            </Form>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
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
                  url["url-server"] +
                  "/uploads/" +
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
                <h3> Dirigeant </h3>
                {/* Nom Prenom */}
                <Accordion>
                  <Card className="accordeon-card">
                    <Card.Header className="accordeon-header">
                      <Accordion.Toggle
                        className="accordeon-btn"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <p className="editable fw900">
                          {" "}
                          {this.state.dataAdherent.dirigeant.prenom}{" "}
                          {this.state.dataAdherent.dirigeant.nom}{" "}
                        </p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row}>
                            <Col sm="10">
                              <Form.Control
                                name="prenom"
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                className="accordion-input"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.dirigeant.prenom
                                }
                              />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row}>
                            <Col sm="10">
                              <Form.Control
                                name="nom"
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                className="accordion-input"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.dirigeant.nom
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                {/* Fonction */}
                <Accordion>
                  <Card className="accordeon-card">
                    <Card.Header className="accordeon-header">
                      <Accordion.Toggle
                        className="accordeon-btn"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <p className="editable">
                          {this.state.dataAdherent.dirigeant.fonction}
                        </p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row}>
                            <Col sm="10">
                              <Form.Control
                                name="fonction"
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                className="accordion-input"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.dirigeant.fonction
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <h3> Parole de membre </h3>
                {/* Nom Prenom */}
                <Accordion>
                  <Card className="accordeon-card">
                    <Card.Header className="accordeon-header">
                      <Accordion.Toggle
                        className="accordeon-btn"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <p className="justify editable">
                          {" "}
                          {this.state.dataAdherent.dirigeant.paroleDeMembre}
                        </p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row}>
                            <Col sm="10">
                              <Form.Control
                                name="paroleDeMembre"
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                className="accordion-input"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.dirigeant
                                    .paroleDeMembre
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
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
