import React, { Component } from "react";

import "../../../src/mainStyle.css";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="copyright">
          Copyright © CANNES IS UP
          <br />
          <a href="https://cannesisup.com/mentions-legales.php">
            Mentions légales
          </a>
          <br />
          <br />
          Realisation:{" "}
          <a
            href="https://github.com/manon2sf"
            target="blank"
            rel="noopener noreferrer"
          >
            Manon De Saint Ferreol
          </a>
          ,{" "}
          <a
            href="https://github.com/AlexF-Junior"
            target="blank"
            rel="noopener noreferrer"
          >
            Alexandre Felici
          </a>
          ,{" "}
          <a
            href="https://github.com/MaximeFabre-FullStack"
            target="blank"
            rel="noopener noreferrer"
          >
            Maxime Fabre{" "}
          </a>
          <a
            href="https://lebocal.academy/"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            (Le Bocal Academy)
          </a>
        </div>
        <div className="lienReseaux">
          <a
            href="https://www.facebook.com/cannesisup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-4x fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/cannesisup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-4x fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCBIpW614EFQGZrFVl6ARsAw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-4x fa-youtube-square"></i>
          </a>
          <a
            href="https://twitter.com/cannesisup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-4x fa-twitter-square"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
