/**
 * TODO CHANGER LES LIENS VERS NO LIENS
 */

import React, { Component } from "react";
import Footer from "../Footer/Footer";
import "../../../src/mainStyle.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adherentConnecté: false, // afin d'afficher ou non certain parametres, a recup en fonction du login
      style: "adherentOn",
    };
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="bande"></div>
        <div className="navbarHeader">
          <a href="https://cannesisup.com/#home">
            <img src="./assets/img/logocopie.png" alt="logo"></img>
          </a>
        </div>
        <div id="navbar">
          <ul className="navListe">
            <li>
              <a href="https://cannesisup.com/">ACCUEIL</a>
            </li>

            <li>
              <a href="https://cannesisup.com/contact.php">Devenez adhérent</a>
            </li>

            <li>
              <a href="https://cannesisup.com/#dda">DDA îles de Lerins</a>
            </li>

            <li>
              <a href="https://cannesisup.com/#actus">Actualités</a>
            </li>

            {/* <li>
               <a href="">Adhérents</a> 
            </li> */}

            <li>
              <a href="https://cannesisup.com/equipe.php">L'équipe</a>
            </li>

            <li>
              <a href="https://cannesisup.com/#partenaires">Partenaires</a>
            </li>
            <li>
              <a
                href="https://cannesisup.com/contact.php"
                className="lienContact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Navbar;
