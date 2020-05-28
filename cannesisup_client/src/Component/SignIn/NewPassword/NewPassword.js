import React, { Component } from "react";
import { Form } from "react-bootstrap";
import url from "../../../url.json";
import { withRouter } from "react-router-dom";

import "../../../../src/mainStyle.css";
import "./NewPassword.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      password_confirm: "",
      onCheck: "hidden",
      differentPassword: "differentPasswordOff",
      samePassword: "samePasswordOff",
      incorrectPassword: "incorrectPasswordOff",
    };
  }

  // REQUETE POST
  submitForm = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.password_confirm) {
      return;
    } else {
      this.setState({ onCheck: "display" });

      const body = {
        password: this.state.password,
        email: this.props.match.params.email,
      };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(body),
      };

      fetch(url["url-server"] + "/adherents/newpassword", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.success);
          if (data.success) {
            this.props.history.push("/signin");
          } else {
            alert(data.msg);
          }
        })
        .then((error) => {
          console.log(error);
        });
    }
  };

  // RECUPERATION DES INPUTS
  handle_change = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
    this.confirmPassword();
  };

  // COMPARAISON MOTDEPASSE / MOTDEPASSECOMFIRME
  confirmPassword = (e) => {
    if (!this.state.password.valueOf()) {
      this.setState({
        incorrectPassword: "incorrectPasswordOn",
        differentPassword: "differentPasswordOff",
        samePassword: "samePasswordOff",
      });
    } else if (
      this.state.password !== this.state.password_confirm ||
      !this.state.password.valueOf(null)
    ) {
      this.setState({
        differentPassword: "differentPasswordOn",
        samePassword: "samePasswordOff",
        incorrectPassword: "incorrectPasswordOff",
      });
    } else if (
      this.state.password === this.state.password_confirm ||
      !this.state.password.valueOf(null)
    ) {
      this.setState({
        samePassword: "samePasswordOn",
        differentPassword: "differentPasswordOff",
        incorrectPassword: "incorrectPasswordOff",
      });
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="img-container">
          <img src="/assets/img/logocopie.png" alt="Cannes is up" />
        </div>
        <div className="message-container cadre">
          <h4> Merci de saisir votre nouveau mot de passe</h4>
          <div className="form-container containerPassword">
            <Form onSubmit={this.submitForm}>
              <Form.Group>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  name="password"
                  onChange={this.handle_change}
                  type="password"
                  value={this.state.password}
                  required
                  className="password"
                />
                <p className={this.state.incorrectPassword}>
                  Veuillez tapez un mot de passe.
                </p>
                <p className={this.state.samePassword}>
                  Mots de passe identiques.
                </p>
                <p className={this.state.differentPassword}>
                  Mots de passe différents.
                </p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirmation du mot de passe</Form.Label>
                <Form.Control
                  name="password_confirm"
                  onChange={this.handle_change}
                  type="password"
                  value={this.state.passwordConfirm}
                  required
                  className="passwordConfirm"
                />
                <p className={this.state.samePassword}>
                  Mots de passe identiques
                </p>
                <p className={this.state.differentPassword}>
                  Mots de passe différents
                </p>
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

export default withRouter(ForgotPassword);
