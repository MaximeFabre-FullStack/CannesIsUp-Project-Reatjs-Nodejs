/**
 * Mail.js - Page de confirmation d'adhesion
 */

import React, { Component } from "react";
import "../../../src/mainStyle.css";
import url from "../../url.json";

class Mail extends Component {
  sendEmail = () => {
    const body = {
      email: this.props.match.params.email,
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
    fetch(url["url-server"] + "/adherents/signin/resend", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="main-container">
        <div className="img-container">
          <img src="/assets/img/logocopie.png" alt="Cannes is up" />
        </div>

        <div className="message-container cadre">
          <h3>Oups !</h3>
          <p>Une erreur s'est produite lors de la confirmation d'email.</p>
          <p>Le lien de confirmation a peut être expiré.</p>
          <br />
          <button className="btn-default" onClick={this.sendEmail}>
            Renvoyer un mail de confirmation
          </button>
        </div>
      </div>
    );
  }
}

export default Mail;
