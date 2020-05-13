import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import "../../../src/mainStyle.css";
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
        site: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        activite: "",
        description: "",
        logo: null,
        couv: null,
        nomDirigeant: "",
        prenomDirigeant: "",
        parole: "",
        fonction: "",
        photoPortrait: "",
        checkCharte: false,
        checkRgpd: false,
        paiement: "",
      },
    };
  }
  /* Récupère la valeur d'input dans le state */
  handle_change = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    console.log(e.target);
  };

  /* selectionne le fichier dans le state selectedFile*/
  fileSelectedHandler = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.files[0] },
    });
  };

  /* Récupère la valeur d'input dans le state */
  handle_check = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.checked },
    });
    console.log(e.target.checked);
  };

  render() {
    return (
      <div className="form_container">
        <div className="center">
          <h1>Formulaire</h1>
        </div>

        <Form>
          <div className="form_bloc">
            <h3> Identifiants de votre compte</h3>
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

          <div className="form_bloc">
            <h3> Informations sur votre société</h3>
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
                  <Form.Label>Code postal * </Form.Label>
                  <Form.Control
                    name="code_postal"
                    onChange={this.handle_change}
                    placeholder="06000"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Ville *</Form.Label>
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
              <Form.Label>Adresse Email (publique) </Form.Label>
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
            <Form.Group>
              <Form.Label>Site internet</Form.Label>
              <Form.Control
                name="site"
                onChange={this.handle_change}
                placeholder="Votre site web"
              />
            </Form.Group>
            <Form.Group>
              <h4>Réseaux sociaux</h4>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control
                      name="facebook"
                      onChange={this.handle_change}
                      placeholder="Fabebook"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control
                      name="instagram"
                      onChange={this.handle_change}
                      placeholder="Instagram"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      name="linkedin"
                      onChange={this.handle_change}
                      placeholder="Linkedin"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control
                      name="twitter"
                      onChange={this.handle_change}
                      placeholder="Twitter"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Secteur d'activité *</Form.Label>
              <Form.Control
                name="activite"
                onChange={this.handle_change}
                placeholder="Votre secteur d'activité"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description de l'activité *</Form.Label>
              <Form.Control
                name="description"
                onChange={this.handle_change}
                as="textarea"
                placeholder="Décrivez en quelques mots votre activité"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Logo *</Form.Label>
              <Form.File
                name="logo"
                onChange={this.fileSelectedHandler}
                label="Logo (.jpeg , .jpg , .png)"
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo de couverture</Form.Label>
              <Form.File
                name="couv"
                onChange={this.fileSelectedHandler}
                label="Photo de couverture (.jpeg , .jpg , .png)"
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dossier de présentation</Form.Label>
              <Form.File
                name="dossier"
                onChange={this.fileSelectedHandler}
                label="Dossier de présentation PDF (Max 10Mo)"
                custom
              />
            </Form.Group>
          </div>

          <div className="form_bloc">
            <h3> Informations sur le dirigeant</h3>
            <Form.Group>
              <Form.Label>Nom *</Form.Label>
              <Form.Control
                name="nomDirigeant"
                onChange={this.handle_change}
                placeholder="Nom du dirigeant"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prénom *</Form.Label>
              <Form.Control
                name="prenomDirigeant"
                onChange={this.handle_change}
                placeholder="Prénom du dirigeant"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fonction *</Form.Label>
              <Form.Control
                name="fonction"
                onChange={this.handle_change}
                placeholder="Fonction du dirigeant"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Parole de membre </Form.Label>
              <Form.Control
                name="parole"
                onChange={this.handle_change}
                placeholder="Parole de membre"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.File
                name="photoPortrait"
                onChange={this.fileSelectedHandler}
                label="Photo de profil (.jpeg , .jpg , .png)"
                custom
              />
            </Form.Group>
          </div>

          <div className="form_bloc">
            <Form.Check
              type="checkbox"
              name="charte"
              onChange={this.handle_check}
              label="J'accepte la Charte Cannes is Up"
            />
            <Form.Check
              type="checkbox"
              name="rgpd"
              onChange={this.handle_check}
              label="RGPD"
            />
          </div>

          <div className="form_bloc">
            <Form.Check type="radio" name="paiement" label="CB" />
            <Form.Check type="radio" name="paiement" label="Virement" />
          </div>

          <div className="btn">
            <button className="btn-default">Inscription</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
