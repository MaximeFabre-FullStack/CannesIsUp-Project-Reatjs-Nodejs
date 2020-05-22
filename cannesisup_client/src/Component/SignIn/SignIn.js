import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Redirect } from "react-router-dom";

import "../../../src/mainStyle.css";
import "./style.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSignIn: "",
      motDePasseSignIn: "",
    };
  }
  recup_info = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  requeteInfo = (e) => {
    e.preventDefault();

    const body = {
      emailSignIn: this.state.emailSignIn,
      motDePasseSignIn: this.state.motDePasseSignIn,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Requête */
    fetch("http://localhost:8080/adherents/signin", options)
      .then((response) => response.json())
      .then(
        (data) => {
          if (!data) {
            alert("Compte inexistant ou mauvais champs!"); // TODO voir comment gerer mdp/mail/alert
          }
          const uid = data.userId;
          const token = data.token;
          const admin = data.admin;
          localStorage.setItem("uid", uid);
          localStorage.setItem("token", token);
          localStorage.setItem("admin", admin);

          return <Redirect to="/annuaire" />;
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="form_container">
          <div className="center">
            <h1>Connexion</h1>
          </div>
          <Form onSubmit={this.requeteInfo}>
            <div className="form_bloc">
              <h3> Identifiants de votre compte</h3>
              <Form.Group>
                <Form.Label>Adresse Email (privée) *</Form.Label>
                <Form.Control
                  name="emailSignIn"
                  onChange={this.recup_info}
                  type="text"
                  placeholder="exemple@ex.com"
                  value={this.state.emailSignIn}
                />
                <Form.Text className="text-muted">
                  Adresse email que vous utilisez pour accéder à votre espace
                  membre.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Mot de passe *</Form.Label>
                <Form.Control
                  name="motDePasseSignIn"
                  onChange={this.recup_info}
                  type="password"
                  placeholder="Votre mot de passe"
                  value={this.state.motDePasseSignIn}
                />
                <a href="https://cannesisup.com/#home">Mot de passe oublié?</a>
              </Form.Group>
            </div>
            <div className="btn">
              <button className="btn-default">Connexion</button>
            </div>
          </Form>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default SignIn;
