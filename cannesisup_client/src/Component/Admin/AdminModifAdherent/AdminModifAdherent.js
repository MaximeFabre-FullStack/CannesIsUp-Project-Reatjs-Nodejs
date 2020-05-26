import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
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
          console.log(data);
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

  handleChangeModifications(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

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
          <tbody>
            <tr>
              <td>
                <p>{this.state.adherentData.dirigeant.prenom}</p>
              </td>
              <td>
                <p>{this.state.adherentData.dirigeant.nom}</p>
              </td>
              <td>
                <p>{this.state.adherentData.dirigeant.fonction}</p>
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
          <tbody>
            <tr>
              <td>
                {" "}
                <p>{this.state.adherentData.nomDeSociete} </p>
              </td>
              <td>
                <p>{this.state.adherentData.descriptionExhaustive}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.secteurDactivite}</p>
              </td>
            </tr>
          </tbody>
        </Table>

        <h2>Coordonnées:</h2>
        <Table striped bordered hover className="tableau">
          <thead>
            <tr>
              <th>
                <p>Coordonnées: </p>
              </th>
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
          <tbody>
            <tr>
              <td>
                {" "}
                <p>{this.state.adherentData.coordonnes.adresse}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.coordonnes.telephone}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.coordonnes.mailSociete}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.coordonnes.siteWeb}</p>
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
          <tbody>
            <tr>
              <td>
                {" "}
                <p>{this.state.adherentData.reseauSociaux.facebook}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.reseauSociaux.instagram}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.reseauSociaux.linkedin}</p>
              </td>
              <td>
                {" "}
                <p>{this.state.adherentData.reseauSociaux.twitter}</p>
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
          <tbody>
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
