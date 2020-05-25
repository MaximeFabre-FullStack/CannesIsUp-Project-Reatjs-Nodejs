import React, { Component } from "react";

import { Button, Table } from "react-bootstrap";
import "./AdminAnnuaire.css";
import { Link } from "react-router-dom";

import axios from "axios";
import NavAdmin from "./NavAdmin/NavAdmin";
import Footer from "../Footer/Footer";
import SearchBAr from "../Annuaire/SearchBar/SearchBar";

class AnnuaireAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      etat: 0,
    };
  }

  // REQUETE GET TOUS LES ADHERENT DANS LA BDD AU CHARGEMENT DE LA PAGE
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    };

    fetch("http://localhost:8080/admin", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ allData: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // APRES LA REQUETE FETCH / COMPONENTDIDMOUNT , BOUCLE AFFICHAGE APPELEE DANS LE RENDER
  affichageAllData = () => {
    return this.state.allData.map((element, index) => (
      <tr>
        <td>#{index}</td>
        <td>
          <h3>{element.nomDeSociete}</h3>
        </td>
        <td>
          {element.dirigeant.nom}
          <br />
          {element.dirigeant.prenom}
        </td>
        <td>
          <p>{element.coordonnes.telephone}</p>
        </td>
        <td>
          <a
            href={
              "mailto:" +
              element.mailPrive +
              "?&subject=A%20propos%20de%20votre%20compte%20CannesIsup"
            }
          >
            {element.mailPrive}
          </a>
        </td>
        <td>
          <p>{element.coordonnes.ville}</p>
        </td>
        <td>
          <p>{element.paiement}</p>
        </td>

        <td>
          <Button
            variant="secondary"
            onClick={() => {
              this.suppression(element._id);
            }}
            className="bouttonAdmin"
          >
            {" "}
            Supprimer
          </Button>
        </td>
        <td>{this.status(element.estActif, element._id)}</td>
        <td>
          <Link to={"/admin/modif/adherent/" + element._id}>
            <Button variant="secondary" className="bouttonAdmin">
              Modifier
            </Button>
          </Link>
        </td>
      </tr>
    ));
  };

  // FONCTION SUPPRESSION D'UN ADHERENT
  suppression = (element) => {
    const action = prompt(
      "Etes vous sur de vouloir supprimer cet adherent? oui / non"
    );
    if (action === "non") {
      return;
    }

    axios
      .delete("http://localhost:8080/admin/delete", { data: { _id: element } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // FONCTION POUR PASSER UN STATUS D'ADHERENT A ACTIF
  passerStatusActif = (id) => {
    console.log(id);
    axios
      .put("http://localhost:8080/admin/status/true", { data: { _id: id } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // FONCTION POUR PASSER UN STATUS D'ADHERENT A INACTIF
  passerStatusInactif = (id) => {
    console.log(id);
    axios
      .put("http://localhost:8080/admin/status/false", { data: { _id: id } })
      .then(
        (data) => {
          this.setState({ etat: +1 });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // CHANGE LA COULEUR ET LE TEXTE DU BOUTON SUIVANT LE STATUS ACTIF/INACTIF
  status = (element, uid) => {
    if (element) {
      return (
        <Button
          variant="danger"
          onClick={() => this.passerStatusInactif(uid)}
          className="boutonInactif bouttonAdmin"
        >
          Rendre inactif
        </Button>
      );
    }
    return (
      <Button
        variant="success"
        onClick={() => this.passerStatusActif(uid)}
        className="boutonActif bouttonAdmin"
      >
        Rendre actif
      </Button>
    );
  };

  // RENDER DE LA PAGE
  render() {
    return (
      <div>
        <NavAdmin />
        <div className="header">
          <h1>TOUS LES MEMBRES</h1>
        </div>
        <SearchBAr />
        <div>
          <p className="nombreMembres">
            {" "}
            Nombre de membres : {this.state.allData.length}{" "}
          </p>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ENTREPRISE</th>
              <th>DIRIGEANT</th>
              <th>TELEPHONE</th>
              <th>MAIL</th>
              <th>VILLE</th>
              <th>
                PREFERENCE
                <br />
                PAIEMENT
              </th>
              <th>SUPPRIMER</th>
              <th>STATUS</th>
              <th>MODIFIER</th>
            </tr>
          </thead>
          <tbody>{this.affichageAllData()}</tbody>
        </Table>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AnnuaireAdmin;
