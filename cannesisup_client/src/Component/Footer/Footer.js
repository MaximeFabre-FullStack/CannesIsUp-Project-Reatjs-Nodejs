import React, { Component } from "react";

import "../../../src/mainStyle.css";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="copyright">
          <a
            href="https://www.facebook.com/cannesisup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/facebook.svg"
              alt="facebook-logo"
              className="reseaux-logo"
            />
          </a>
          <a
            href="https://www.instagram.com/cannesisup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/instagram.svg"
              alt="instagram-logo"
              className="reseaux-logo ml-20"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBIpW614EFQGZrFVl6ARsAw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/youtube.svg"
              alt="youtube-logo"
              className="reseaux-logo ml-20"
            />
          </a>
          <a
            href="https://twitter.com/cannesisup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/img/twitter.svg"
              alt="twitter-logo"
              className="reseaux-logo ml-20"
            />
          </a>
          <br />
          <br />
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
      </div>
    );
  }
}
export default Footer;
