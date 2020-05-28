import React, { Component } from "react";

import {
  Table,
  Button,
  Accordion,
  Card,
  Form,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import "./AdminModifAdherent.css";

import NavbarAdmin from "../../Navbar/NavbarAdmin/NavbarAdmin";
import Footer from "../../Footer/Footer";
import axios from "axios";
import url from "../../../url.json";

class AdminModifAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
      dataAdherent: {
        coordonnes: {},
        dirigeant: {},
        reseauSociaux: {},
      },
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
          this.setState({ dataAdherent: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  reFetch = () => {
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
          this.setState({ dataAdherent: data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
    // await this.setState({ [e.target.name]: e.target.value });
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
    // await this.setState({ [e.target.name]: e.target.value });
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

  onHide = () => this.setState({ modalShow: false });

  affichModal = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.modalShow}
        onHide={() => this.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Modification réussie !</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {"La fiche de l'adherent " +
              this.state.dataAdherent.nomDeSociete +
              " a bien été mise a jour !"}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButtonAdmin" onClick={this.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

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
        url["url-server"] +
        "/adherents/updateFile/" +
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

  submitModifs = () => {
    const body = this.state.dataAdherent;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch(url["url-server"] + "/admin/modifier/adherent", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            dataAdherent: data.data,
            modalShow: true,
            setModalShow: true,
          });
          this.reFetch();
        },
        (error) => {
          console.log(error);
          alert(
            "Une erreur est survenue, veuillez réessayer ou contacter le service technique"
          );
        }
      );
  };

  render() {
    return (
      <div className="maindiv">
        <NavbarAdmin />

        <div className="headerMembres">
          <h1>MODIFICATION MEMBRE</h1>
        </div>

        <br />
        {this.affichModal()}

        <br />

        <h2>Dirigeant: </h2>
        <div>
          <h3>
            N'oubliez pas de valider les modifications en cliquant sur le bouton
            fin de page
          </h3>
        </div>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Prénom dirigeant: </p>
              </th>
              <th>
                <p>Nom dirigeant: </p>
              </th>
              <th>
                <p>Fonction: </p>
              </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.dirigeant.prenom}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                name="prenom"
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.dirigeant.prenom
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.dirigeant.nom}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                name="nom"
                                className="inputModif"
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
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.dirigeant.fonction}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsDirigeant
                                }
                                name="fonction"
                                className="inputModif"
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
              </td>
            </tr>
          </tbody>
        </Table>

        <h2>Societe: </h2>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Nom de societe: </p>
              </th>
              <th>
                <p>Description exhaustive: </p>
              </th>
              <th>
                <p>Secteur d'activité: </p>
              </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.nomDeSociete}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModifications}
                                name="nomDeSociete"
                                className="inputModif"
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
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.descriptionExhaustive}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModifications}
                                name="descriptionExhaustive"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.descriptionExhaustive
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.secteurDactivite}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModifications}
                                name="secteurDactivite"
                                className="inputModif"
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
              </td>
            </tr>
          </tbody>
        </Table>

        <h2>Coordonnées:</h2>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Adresse: </p>
              </th>
              <th>
                <p>Complement: </p>
              </th>
              <th>
                <p>Ville: </p>
              </th>
              <th>
                <p>Code postal: </p>
              </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.adresse}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="adresse"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes.adresse
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {
                            this.state.dataAdherent.coordonnes
                              .complementDadresse
                          }
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="complementDadresse"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes
                                    .complementDadresse
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.ville}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="ville"
                                className="inputModif"
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
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.codePostal}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="codePostal"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes.codePostal
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Téléphone: </p>
              </th>
              <th>
                <p>Mail societe: </p>
              </th>
              <th>
                <p>Site web: </p>
              </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.telephone}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="telephone"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes.telephone
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.mailSociete}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="mailSociete"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes.mailSociete
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.coordonnes.siteWeb}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={
                                  this.handleChangeModificationsCoordonnes
                                }
                                name="siteWeb"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.coordonnes.siteWeb
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </Table>

        <h2>Reseaux:</h2>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Facebook: </p>
              </th>
              <th>
                <p>Instagram: </p>
              </th>
              <th>
                <p>Linkedin: </p>
              </th>
              <th>
                <p>Twitter: </p>
              </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.reseauSociaux.facebook}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModificationsReseaux}
                                name="facebook"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.reseauSociaux.facebook
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.reseauSociaux.instagram}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModificationsReseaux}
                                name="instagram"
                                className="inputModif"
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
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.reseauSociaux.linkedin}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModificationsReseaux}
                                name="linkedin"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.reseauSociaux.linkedin
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion>
                  <Card className="cardTop">
                    <Card.Header className="cardHeader">
                      <Accordion.Toggle
                        className="boutonAccordeon"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="editable">
                          {this.state.dataAdherent.reseauSociaux.twitter}
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                onChange={this.handleChangeModificationsReseaux}
                                name="twitter"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.dataAdherent.reseauSociaux.twitter
                                }
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </Table>

        <h2>Photos & Logos:</h2>

        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>Portrait dirigeant: </th>
              <th>Photo de couverture: </th>
              <th>Logo d'entreprise: </th>
              <th>Brochure pdf: </th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <td>
                <img
                  className="imgModif"
                  src={
                    url["url-server"] +
                    "/uploads/" +
                    this.state.dataAdherent.dirigeant.photoPortrait
                  }
                  alt="portrait dirigeant"
                  onClick={this.updatePhotoPortrait}
                />
                <input
                  onChange={this.fileSelectedHandler}
                  ref={this.inputPhotoPortrait}
                  type="file"
                  style={{ display: "none" }}
                  name="photoPortrait"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  variant="top"
                  src={
                    url["url-server"] +
                    "/uploads/" +
                    this.state.dataAdherent.photoCouverture
                  }
                  alt="de couverture"
                  onClick={this.updatePhotoCouv}
                />
                <input
                  onChange={this.fileSelectedHandler}
                  ref={this.inputPhotoCouv}
                  type="file"
                  style={{ display: "none" }}
                  name="couv"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={
                    url["url-server"] +
                    "/uploads/" +
                    this.state.dataAdherent.logo
                  }
                  alt="logo"
                  onClick={this.updateLogo}
                />
                <input
                  onChange={this.fileSelectedHandler}
                  ref={this.inputLogo}
                  type="file"
                  style={{ display: "none" }}
                  name="logo"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={
                    url["url-server"] +
                    "/uploads/" +
                    this.state.dataAdherent.dossierPresentation
                  }
                  alt="dossier"
                  onClick={this.updateDossierPresentation}
                />
                <input
                  onChange={this.fileSelectedHandler}
                  ref={this.inputDossierPresentation}
                  type="file"
                  style={{ display: "none" }}
                  name="dossier"
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <Button
          variant="primary"
          size="lg"
          block
          className="submitAdherent"
          onClick={this.submitModifs}
        >
          Modifier la fiche
        </Button>

        <Footer />
      </div>
    );
  }
}

export default AdminModifAdherent;
