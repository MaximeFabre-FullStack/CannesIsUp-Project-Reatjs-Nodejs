import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import "./style.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        password_confirm: "",
        nom: "",
        adresse: "",
        adresse2: "",
        code_postal: "",
        ville: "",
        tel: "",
        email_public: "",
      },
    };
  }
  /* Récupère la valeur d'input dans le state */
  handle_change = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    console.log(this.state.form.email);
  };

  render() {
    return (
      <div className="form_container">
        <Form>
          <div className="form_connexion">
            <p> Identifiants de votre compte</p>
            <Form.Group>
              <Form.Label>Adresse Email (privée) *</Form.Label>
              <Form.Control
                name="email"
                onChange={this.handle_change}
                type="email"
                placeholder="exemple@ex.com"
              />
              <Form.Text className="text-muted">
                Adresse email que vous utiliserez pour accéder à votre espace
                membre.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe *</Form.Label>
              <Form.Control
                name="password"
                onChange={this.handle_change}
                type="password"
                placeholder="Votre mot de passe"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirmation du mot de passe *</Form.Label>
              <Form.Control
                name="password_confirm"
                onChange={this.handle_change}
                type="password"
                placeholder="Votre mot de passe"
              />
            </Form.Group>
          </div>

          <div className="form_profil">
            <p> Informations sur votre société</p>
            <Form.Group>
              <Form.Label>Nom *</Form.Label>
              <Form.Control
                name="nom"
                onChange={this.handle_change}
                placeholder="Nom de votre société"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Adresse *</Form.Label>
              <Form.Control
                name="adresse"
                onChange={this.handle_change}
                placeholder="221B Baker St"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Complément d'adresse</Form.Label>
              <Form.Control
                name="adresse2"
                onChange={this.handle_change}
                placeholder="2ème étage"
              />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Code postal</Form.Label>
                  <Form.Control
                    name="code_postal"
                    onChange={this.handle_change}
                    placeholder="06000"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Ville</Form.Label>
                  <Form.Control
                    name="ville"
                    onChange={this.handle_change}
                    placeholder="Ville"
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                name="tel"
                onChange={this.handle_change}
                placeholder="0400000000"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Adresse Email (publique) *</Form.Label>
              <Form.Control
                name="email_public"
                onChange={this.handle_change}
                type="email"
                placeholder="exemple@ex.com"
              />
              <Form.Text className="text-muted">
                Adresse email qui apparaîtra sur votre profil.
              </Form.Text>
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
