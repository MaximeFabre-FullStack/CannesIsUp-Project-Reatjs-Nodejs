import React, { Component } from "react";

import { Button, Table, Form } from "react-bootstrap";
import "./AdminAnnuaire.css";
import { Link } from "react-router-dom";
import url from "../../url.json";

import axios from "axios";
import NavbarAdmin from "../Navbar/NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";

class AnnuaireAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      etat: 0,
      search: "",
      dataApplatie: [],
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
          const dataATraiter = data.map((element) => {
            return Object.assign(
              {},
              ...(function _flatten(o) {
                if (element == null) {
                  return;
                } else {
                  return [].concat(
                    ...Object.keys(o).map((k) =>
                      typeof o[k] === "object" ? _flatten(o[k]) : { [k]: o[k] }
                    )
                  );
                }
              })(element)
            );
          });
          this.setState({ allData: data, dataApplatie: dataATraiter });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // APRES LA REQUETE FETCH / COMPONENTDIDMOUNT , BOUCLE AFFICHAGE APPELEE DANS LE RENDER
  affichageAllData = () => {
    if (this.state.search === "") {
      return this.state.allData.map((element, index, key) => (
        <tr key={index}>
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
          <td>{this.status(element.estActif, element._id)}</td>
          <td>
            <Link to={"/admin/modif/adherent/" + element._id}>
              <Button variant="secondary" className="bouttonAdmin">
                Modifier
              </Button>
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={() => {
                this.suppression(element._id);
              }}
              className="bouttonAdmin"
            >
              {" "}
              Supprimer
            </Button>
          </td>
        </tr>
      ));
    } else {
      let adherentFiltered = this.state.dataApplatie.filter((membre) => {
        for (let property in membre) {
          if (
            String(membre[property]).match(
              new RegExp(this.state.search, "g")
            ) &&
            property !== "_id"
          ) {
            return true;
          }
        }
        return false;
      });

      return adherentFiltered.map((element, index) => (
        <tr>
          <td>#{index}</td>
          <td>
            <h3>{element.nomDeSociete}</h3>
          </td>
          <td>
            {element.nom}
            <br />
            {element.prenom}
          </td>
          <td>
            <p>{element.telephone}</p>
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
            <p>{element.ville}</p>
          </td>
          <td>
            <p>{element.paiement}</p>
          </td>
          <td>{this.status(element.estActif, element._id)}</td>
          <td>
            <Link to={"/admin/modif/adherent/" + element._id}>
              <Button variant="secondary" className="bouttonAdmin">
                Modifier
              </Button>
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={() => {
                this.suppression(element._id);
              }}
              className="bouttonAdmin"
            >
              {" "}
              Supprimer
            </Button>
          </td>
        </tr>
      ));
    }
  };

  // FONCTION SUPPRESSION D'UN ADHERENT
  suppression = (element) => {
    const action = prompt(
      "Etes vous sur de vouloir supprimer cet adherent? oui / non"
    );
    if (action !== "oui") {
      return;
    }

    axios
      .delete(url["url-server"] + "/admin/delete", { data: { _id: element } })
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
          variant="secondary"
          onClick={() => this.passerStatusInactif(uid)}
          className="bouttonAdmin"
        >
          Desactiver
        </Button>
      );
    }
    return (
      <Button
        variant="success"
        onClick={() => this.passerStatusActif(uid)}
        className=" bouttonAdmin"
      >
        Activer
      </Button>
    );
  };

  handleSearchBar = async (e) => {
    await this.setState({ search: e.target.value });
  };

  // RENDER DE LA PAGE
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="header">
          <h1>TOUS LES MEMBRES</h1>
        </div>
        <div className="barreRecherche">
          <Form.Control
            placeholder="Recherchez : un membre, une activité, un mot clé..."
            className="react-search-field"
            onChange={this.handleSearchBar}
            name="recherche"
          />
        </div>
        <div>
          <p className="nombreMembres">
            {" "}
            Nombre de membres : {this.state.allData.length}{" "}
          </p>
        </div>

        <Table striped bordered hover className="tableau">
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
              <th>STATUS</th>
              <th>MODIFIER</th>
              <th>SUPPRIMER</th>
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
