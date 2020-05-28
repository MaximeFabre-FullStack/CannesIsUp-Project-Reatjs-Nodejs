/**
 * Mail.js - Page de confirmation d'adhesion
 */

import React, { Component } from "react";
import url from "../../url.json";
import "../../../src/mainStyle.css";

class Mail extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="img-container">
          <img src="/assets/img/logocopie.png" alt="Cannes is up" />
        </div>

        <div className="message-container cadre">
          <h3>Merci !</h3>
          <p>Votre demande d'adhésion est désormais confirmée.</p>
          <p>
            Nous vous contacterons prochainement pour valider l'inscription et
            vous donner l'accès à votre compte.
          </p>
          <h4>A bientôt !</h4>
          <br />
          <a href={url["url-client"] + "/signin"}>Retour au site</a>
        </div>
      </div>
    );
  }
}

export default Mail;
