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
            <a href="https://cannesisup.com/">
              <li>ACCUEIL</li>
            </a>

            <a href="https://cannesisup.com/contact.php">
              <li>Devenez adhérent</li>
            </a>

            <a href="https://cannesisup.com/#dda">
              <li>DDA îles de Lerins</li>
            </a>

            <a href="https://cannesisup.com/#actus">
              <li>Actualités</li>
            </a>

            {/* <li>
               <a href="">Adhérents</a> 
            </li> */}

            <a href="https://cannesisup.com/equipe.php">
              <li>L'équipe</li>
            </a>

            <a href="https://cannesisup.com/#partenaires">
              <li>Partenaires</li>
            </a>

            <a
              href="https://cannesisup.com/contact.php"
              className="lienContact"
            >
              <li>Contact</li>
            </a>
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
