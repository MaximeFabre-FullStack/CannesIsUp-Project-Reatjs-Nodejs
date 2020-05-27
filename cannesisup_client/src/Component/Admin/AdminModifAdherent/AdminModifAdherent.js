import React, { Component } from "react";

import {
  Table,
  Button,
  Accordion,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "./AdminModifAdherent.css";

import NavbarAdmin from "../../Navbar/NavbarAdmin/NavbarAdmin";
import Footer from "../../Footer/Footer";
import axios from "axios";

class AdminModifAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      email: "",
      nom: "",
      adresse: "",
      adresse2: "",
      code_postal: "",
      ville: "",
      tel: "",
      email_public: "",
      site: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      activite: "",
      description: "",
      // logo: this.state.adherentData ?,
      // couv: this.state.adherentData ?,
      // dossier: this.state.adherentData ?,
      nomDirigeant: "",
      prenomDirigeant: "",
      parole: "",
      fonction: "",
      // photoPortrait: this.state.adherentData ?,
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
          this.setState({
            email: data ? data.mailPrive : "",
            nom: data ? data.nomDeSociete : "",
            adresse: data ? data.coordonnes.adresse : "",
            adresse2: data ? data.coordonnes.complementDadresse : "",
            code_postal: data ? data.coordonnes.codePostal : "",
            ville: data ? data.coordonnes.ville : "",
            tel: data ? data.coordonnes.telephone : "",
            email_public: data ? data.coordonnes.mailSociete : "",
            site: data ? data.coordonnes.siteWeb : "",
            facebook: data ? data.reseauSociaux.facebook : "",
            instagram: data ? data.reseauSociaux.instagram : "",
            linkedin: data ? data.reseauSociaux.linkedin : "",
            twitter: data ? data.reseauSociaux.twitter : "",
            activite: data ? data.secteurDactivite : "",
            description: data ? data.descriptionExhaustive : "",
            logo: data ? data.logo : "",
            couv: data ? data.photoCouverture : "",
            dossier: data ? data.dossierPresentation : "",
            nomDirigeant: data ? data.dirigeant.nom : "",
            prenomDirigeant: data ? data.dirigeant.prenom : "",
            parole: data ? data.dirigeant.paroleDeMembre : "",
            fonction: data ? data.dirigeant.fonction : "",
            photoPortrait: data ? data.photoPortrait : "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleChangeModifications = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  submitModifs = () => {
    const body = this.state;

    axios.put("http://localhost:8080/admin/modifier/adherent", body).then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
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
                        {this.state.prenomDirigeant}
                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="cardBody" eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                              <Form.Control
                                name="prenomDirigeant"
                                onChange={this.handleChangeModifications}
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.prenomDirigeant}
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
                        {this.state.nomDirigeant}
                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="nomDirigeant"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.nomDirigeant}
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
                        {this.state.fonction}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="fonction"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.fonction}
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
                        {this.state.nom}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="nom"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.nom}
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
                        {this.state.description}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="description"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.description}
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
                        {this.state.activite}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="activite"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.activite}
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
                        {this.state.adresse}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="adresse"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.adresse}
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
                        {this.state.adresse2}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="adresse2"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.adresse2}
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
                        {this.state.ville}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="ville"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.ville}
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
                        {this.state.code_postal}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="code_postal"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.code_postal}
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
                        {this.state.tel}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="tel"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.tel}
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
                        {this.state.email_public}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="email_public"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.email_public}
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
                        {this.state.site}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="site"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.site}
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
                <p>Réseaux sociaux: </p>
              </th>
              <th>
                <p>Réseaux sociaux: </p>
              </th>
              <th>
                <p>Réseaux sociaux: </p>
              </th>
              <th>
                <p>Réseaux sociaux: </p>
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
                        {this.state.facebook}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="facebook"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.facebook}
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
                        {this.state.instagram}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="instagram"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.instagram}
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
                        {this.state.linkedin}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="linkedin"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.linkedin}
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
                        {this.state.twitter}

                        <div className="crayon">
                          <svg
                            className="bi bi-pencil"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                            />
                          </svg>
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
                                name="twitter"
                                className="inputModif"
                                plaintext
                                defaultValue={this.state.twitter}
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
                    "http://localhost:8080/uploads/" + this.state.photoPortrait
                  }
                  alt="portrait dirigeant"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  variant="top"
                  src={
                    "http://localhost:8080/uploads/" +
                    this.state.photoCouverture
                  }
                  alt="de couverture"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={"http://localhost:8080/uploads/" + this.state.logo}
                  alt="logo"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={"http://localhost:8080/uploads/" + this.state.dossier}
                  alt="dossier"
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
