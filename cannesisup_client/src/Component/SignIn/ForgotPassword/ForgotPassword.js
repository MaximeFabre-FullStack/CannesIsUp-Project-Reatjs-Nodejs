import React, { Component } from "react";
import { Form } from "react-bootstrap";
import url from "../../../url.json";

import "../../../../src/mainStyle.css";
import "./style.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      onCheck: "hidden",
    };
  }
  // REQUETE POST
  submitForm = (e) => {
    e.preventDefault();

    this.setState({ onCheck: "display" });

    const body = {
      email: this.state.email,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch(url["url-server"] + "/adherents/passwordreset", options)
      .then((response) => response.json())
      .then((error) => {
        console.log(error);
      });
  };

  // RECUPERATION DES INPUTS
  handle_change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="main-container">
        <div className="message-container cadre">
          <img src="/assets/img/logocopie.png" alt="Cannes is up" />
          <h4> Vous avez oublié votre mot de passe ?</h4>
          <div className="form-container">
            <Form onSubmit={this.submitForm}>
              <Form.Group>
                <Form.Label>
                  Pas de problème, nous vous envoyons un lien de récupération à:
                </Form.Label>
                <Form.Control
                  name="email"
                  onChange={this.handle_change}
                  type="email"
                  placeholder="exemple@ex.com"
                  value={this.state.email}
                  required
                />
                <Form.Text className="text-muted">
                  Adresse email que vous utilisez pour accéder à votre espace
                  membre.
                </Form.Text>
              </Form.Group>
              <div className="check">
                <button className="btn-default send-email"> Envoyer</button>
                <img
                  src="/assets/img/check-circle-regular.svg"
                  alt="OK"
                  className={this.state.onCheck + " reseaux-logo ml-20"}
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
