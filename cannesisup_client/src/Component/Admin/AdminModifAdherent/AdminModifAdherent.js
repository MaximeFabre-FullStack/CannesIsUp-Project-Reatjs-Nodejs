import React, { Component } from "react";

import {
  Table,
  Button,
  Accordion,
  AccordionCollapse,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "./AdminModifAdherent.css";

import NavbarAdmin from "../../Navbar/NavbarAdmin/NavbarAdmin";
import Footer from "../../Footer/Footer";

class AdminModifAdherent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adherentData: { coordonnes: {}, dirigeant: {}, reseauSociaux: {} },
      form: {
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
      },
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
            adherentData: data,
            form: {
              email: data.mailPrive,
              nom: data.nomDeSociete,
              adresse: data.coordonnes.adresse,
              adresse2: data.coordonnes.complementDadresse,
              code_postal: data.coordonnes.codePostal,
              ville: data.coordonnes.ville,
              tel: data.coordonnes.telephone,
              email_public: data.coordonnes.mailSociete,
              site: data.coordonnes.mailSociete,
              facebook: data ? data.reseauSociaux.facebook : "",
              instagram: data ? data.reseauSociaux.instagram : "",
              linkedin: data ? data.reseauSociaux.linkedin : "",
              twitter: data ? data.reseauSociaux.twitter : "",
              activite: data.secteurDactivite,
              description: data.descriptionExhaustive,
              // logo: this.state.adherentData ?,
              // couv: this.state.adherentData ?,
              // dossier: this.state.adherentData ?,
              nomDirigeant: data.dirigeant.nom,
              prenomDirigeant: data.dirigeant.prenom,
              parole: data.dirigeant.paroleDeMembre,
              fonction: data.dirigeant.fonction,
              // photoPortrait: this.state.adherentData ?,
            },
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleChangeModifications = async (e) => {
    await this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    console.log(this.state.form);
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
                        {this.state.adherentData.dirigeant.prenom}
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
                                defaultValue={
                                  this.state.adherentData.dirigeant.prenom
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
                        {this.state.adherentData.dirigeant.nom}
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
                                defaultValue={
                                  this.state.adherentData.dirigeant.nom
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
                        {this.state.adherentData.dirigeant.fonction}

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
                                defaultValue={
                                  this.state.adherentData.dirigeant.fonction
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
                        {this.state.adherentData.nomDeSociete}

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
                                name="nomDeSociete"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.nomDeSociete
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
                        {this.state.adherentData.descriptionExhaustive}

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
                                name="descriptionExhaustive"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.descriptionExhaustive
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
                        {this.state.adherentData.secteurDactivite}

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
                                name="secteurDactivité"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.secteurDactivite
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
                        {this.state.adherentData.coordonnes.adresse}

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
                                defaultValue={
                                  this.state.adherentData.coordonnes.adresse
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
                        {this.state.adherentData.coordonnes.complementDadresse}

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
                                name="complemenDadresse"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.coordonnes
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
                        {this.state.adherentData.coordonnes.ville}

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
                                defaultValue={
                                  this.state.adherentData.coordonnes.ville
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
                        {this.state.adherentData.coordonnes.codePostal}

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
                                name="codePostal"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.coordonnes.codePostal
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
                        {this.state.adherentData.coordonnes.telephone}

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
                                name="telephone"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.coordonnes.telephone
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
                        {this.state.adherentData.coordonnes.mailSociete}

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
                                name="mailSociete"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.coordonnes.mailSociete
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
                        {this.state.adherentData.coordonnes.siteWeb}

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
                                name="siteWeb"
                                className="inputModif"
                                plaintext
                                defaultValue={
                                  this.state.adherentData.coordonnes.siteWeb
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
                        {this.state.adherentData.reseauSociaux.facebook}

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
                                defaultValue={
                                  this.state.adherentData.reseauSociaux.facebook
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
                        {this.state.adherentData.reseauSociaux.instagram}

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
                                defaultValue={
                                  this.state.adherentData.reseauSociaux
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
                        {this.state.adherentData.reseauSociaux.linkedin}

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
                                defaultValue={
                                  this.state.adherentData.reseauSociaux.linkedin
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
                        {this.state.adherentData.reseauSociaux.twitter}

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
                                defaultValue={
                                  this.state.adherentData.reseauSociaux.twitter
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
                    "http://localhost:8080/uploads/" +
                    this.state.adherentData.dirigeant.photoPortrait
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
                    this.state.adherentData.photoCouverture
                  }
                  alt="de couverture"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={
                    "http://localhost:8080/uploads/" +
                    this.state.adherentData.logo
                  }
                  alt="logo"
                />
              </td>
              <td>
                <img
                  className="imgModif"
                  src={
                    "http://localhost:8080/uploads/" +
                    this.state.adherentData.dossierPresentation
                  }
                  alt="dossier"
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <Button variant="primary" size="lg" block className="submitAdherent">
          Modifier la fiche
        </Button>

        <Footer />
      </div>
    );
  }
}

export default AdminModifAdherent;
