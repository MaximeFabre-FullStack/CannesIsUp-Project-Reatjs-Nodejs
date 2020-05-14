import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
import "../../../src/mainStyle.css";

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
    console.log(this.state);
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
      body: body,
    };

    /* Requête */
    fetch("http://localhost:8080/adherent/signin", options)
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
      </div>
    );
  }
}

export default SignIn;
