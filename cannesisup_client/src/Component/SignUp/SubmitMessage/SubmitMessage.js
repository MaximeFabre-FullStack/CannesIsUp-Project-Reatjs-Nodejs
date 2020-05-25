/**
 * SubmitMessage.js - Page de confirmation d'envoi du formulaire
 */

import React, { Component } from "react";
import "../../../../src/mainStyle.css";
import "./style.css";
import url from "../../../url.json";

class SubmitMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCheck: "hidden",
    };
  }

  sendEmail = () => {
    this.setState({ onCheck: "display" });

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
        <div className="message-container cadre">
          <h3>Merci !</h3>
          <p>Votre demande d'adhésion a été enregistrée.</p>
          <p>Vous allez recevoir un email afin de confirmer votre adresse.</p>
          <br />
          <div className="check">
            <button className="btn-default " onClick={this.sendEmail}>
              Renvoyer le mail de confirmation
            </button>
            <img
              src="/assets/img/check-circle-regular.svg"
              alt="OK"
              className={this.state.onCheck + " reseaux-logo ml-20"}
            />
          </div>

          <br />
          <br />
          <a href={url["url-client"] + "/annuaire"}>Retour au site</a>
        </div>
      </div>
    );
  }
}

export default SubmitMessage;
