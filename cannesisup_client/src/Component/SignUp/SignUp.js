import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "../../../src/mainStyle.css";
import "./style.css";
import { Redirect } from "react-router-dom";

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
        dossier: null,
        nomDirigeant: "",
        prenomDirigeant: "",
        parole: "",
        fonction: "",
        photoPortrait: null,
        checkCharte: false,
        checkRgpd: false,
        paiement: "",
      },
      differentPassword: "differentPasswordOff",
      samePassword: "samePasswordOff",
      incorrectPassword: "incorrectPasswordOff",
      validCharte: "validationCharte",
      choixPaiement: "paiement",
    };
  }

  // CONPARAISON MOTDEPASSE / MOTDEPASSECOMFIRME
  confirmPassword = (e) => {
    if (!this.state.form.password.valueOf()) {
      this.setState({
        incorrectPassword: "incorrectPasswordOn",
        differentPassword: "differentPasswordOff",
        samePassword: "samePasswordOff",
      });
    } else if (
      this.state.form.password !== this.state.form.password_confirm ||
      !this.state.form.password.valueOf(null)
    ) {
      this.setState({
        differentPassword: "differentPasswordOn",
        samePassword: "samePasswordOff",
        incorrectPassword: "incorrectPasswordOff",
      });
    } else if (
      this.state.form.password === this.state.form.password_confirm ||
      !this.state.form.password.valueOf(null)
    ) {
      this.setState({
        samePassword: "samePasswordOn",
        differentPassword: "differentPasswordOff",
        incorrectPassword: "incorrectPasswordOff",
      });
    }
  };

  // RECUPERATION DES INPUTS
  handle_change = async (e) => {
    await this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    this.confirmPassword();
  };

  // RECUPERATION DES FILES
  fileSelectedHandler = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.files[0] },
    });
  };

  // RECUPERE LES INFOS DANS LE STATE
  handle_check = async (e) => {
    await this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.checked },
    });
    this.chartesOk();
  };
  // RECUPERE VALEUR CHECKBOX
  handle_radio = async (e) => {
    if (e.target.checked === true) {
      await this.setState({
        form: { ...this.state.form, [e.target.name]: e.target.value },
      });
    }
    this.paiementOk();
  };

  // REQUETE POST
  submitForm = (e) => {
    e.preventDefault();

    if (this.state.form.password !== this.state.form.password_confirm) {
      return;
    } else {
      const formData = new FormData(e.target);

      axios({
        method: "post",
        url: "http://localhost:8080/adherents",
        data: formData,
      }).then(
        (res) => {
          if (res.data.success) {
            return <Redirect to="https://cannesisup.com/#home" />;
          }
          if (res.data.success === false) {
            alert(res.data.msg);
          }
        },
        (error) => {
          alert("L'envoi du formulaire a echoué, veuillez recommencer");
        }
      );
    }
  };

  // CHANGEMENT LABEL FORM FILE
  renderName = (file) => {
    switch (file) {
      case "logo":
        return this.state.form.logo
          ? this.state.form.logo.name
          : "Logo de société (.jpeg, .jpg, .png)";

      case "couv":
        return this.state.form.couv
          ? this.state.form.couv.name
          : "Photo de couverture (.jpeg , .jpg , .png)";

      case "photoPortrait":
        return this.state.form.photoPortrait
          ? this.state.form.photoPortrait.name
          : "Photo de profil (.jpeg , .jpg , .png)";

      case "dossier":
        return this.state.form.dossier
          ? this.state.form.dossier.name
          : "Dossier de présentation PDF (Max 10Mo)";

      default:
        return "Inserer vos documents ici";
    }
  };

  // VERIFICATION CHARTES
  chartesOk = () => {
    if (this.state.form.checkCharte && this.state.form.checkRgpd) {
      this.setState({
        validCharte: "validationCharteOk",
      });
    } else {
      this.setState({
        validCharte: "validationCharte",
      });
    }
  };

  // CHOIX MODE PAIEMENT
  paiementOk = () => {
    if (this.state.form.paiement) {
      this.setState({
        choixPaiement: "paiementOk",
      });
    } else {
      this.setState({
        choixPaiement: "paiement",
      });
    }
  };

  // RENDER PAGE
  render() {
    return (
      <div>
        {/* Barre de Navigation */}
        <Navbar />

        {/* Formulaire */}
        <div className="form_container">
          <div className="center">
            <h1>Formulaire</h1>
          </div>

          <Form onSubmit={this.submitForm}>
            {/* Identifiants  */}
            <div className="form_bloc">
              <h3> Identifiants de votre compte</h3>
              <Form.Group>
                <Form.Label>Adresse Email (privée) *</Form.Label>
                <Form.Control
                  name="email"
                  onChange={this.handle_change}
                  type="email"
                  placeholder="exemple@ex.com"
                  value={this.state.form.email}
                  required
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
                  value={this.state.form.password}
                  required
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
                <Form.Label>Confirmation du mot de passe *</Form.Label>
                <Form.Control
                  name="password_confirm"
                  onChange={this.handle_change}
                  type="password"
                  placeholder="Votre mot de passe"
                  value={this.state.form.password_confirm}
                  required
                />
                <p className={this.state.samePassword}>
                  Mots de passe identiques
                </p>
                <p className={this.state.differentPassword}>
                  Mots de passe différents
                </p>
              </Form.Group>
            </div>

            {/* Infos sociétés  */}
            <div className="form_bloc">
              <h3> Informations sur votre société</h3>
              <Form.Group>
                <Form.Label>Nom *</Form.Label>
                <Form.Control
                  name="nom"
                  onChange={this.handle_change}
                  placeholder="Nom de votre société"
                  value={this.state.form.nom}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Adresse *</Form.Label>
                <Form.Control
                  name="adresse"
                  onChange={this.handle_change}
                  placeholder="221B Baker St"
                  value={this.state.form.adresse}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Complément d'adresse</Form.Label>
                <Form.Control
                  name="adresse2"
                  onChange={this.handle_change}
                  placeholder="2ème étage"
                  value={this.state.form.adresse2}
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
                      value={this.state.form.code_postal}
                      required
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
                      value={this.state.form.ville}
                      required
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
                  value={this.state.form.tel}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Adresse Email (publique) </Form.Label>
                <Form.Control
                  name="email_public"
                  onChange={this.handle_change}
                  type="email"
                  placeholder="exemple@ex.com"
                  value={this.state.form.email_public}
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
                  value={this.state.form.site}
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
                        value={this.state.form.facebook}
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
                        value={this.state.form.instagram}
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
                        value={this.state.form.linkedin}
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
                        value={this.state.form.twitter}
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
                  value={this.state.form.activite}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description de l'activité *</Form.Label>
                <Form.Control
                  name="description"
                  onChange={this.handle_change}
                  as="textarea"
                  placeholder="Décrivez en quelques mots votre activité"
                  value={this.state.form.description}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Logo *</Form.Label>
                <Form.File
                  name="logo"
                  required
                  onChange={this.fileSelectedHandler}
                  label={this.renderName("logo")}
                  custom
                  data-browse="Choisir une image"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Photo de couverture</Form.Label>

                <Form.File
                  name="couv"
                  onChange={this.fileSelectedHandler}
                  label={this.renderName("couv")}
                  custom
                  data-browse="Choisir une image"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dossier de présentation</Form.Label>
                <Form.File
                  name="dossier"
                  onChange={this.fileSelectedHandler}
                  label={this.renderName("dossier")}
                  custom
                  data-browse="Choisir un fichier"
                />
              </Form.Group>
            </div>

            {/* Infos dirigeant */}
            <div className="form_bloc">
              <h3> Informations sur le dirigeant</h3>
              <Form.Group>
                <Form.Label>Nom *</Form.Label>
                <Form.Control
                  name="nomDirigeant"
                  onChange={this.handle_change}
                  placeholder="Nom du dirigeant"
                  value={this.state.form.nomDirigeant}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Prénom *</Form.Label>
                <Form.Control
                  name="prenomDirigeant"
                  onChange={this.handle_change}
                  placeholder="Prénom du dirigeant"
                  value={this.state.form.prenomDirigeant}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fonction *</Form.Label>
                <Form.Control
                  name="fonction"
                  onChange={this.handle_change}
                  placeholder="Fonction du dirigeant"
                  value={this.state.form.fonction}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Parole de membre </Form.Label>
                <Form.Control
                  name="parole"
                  onChange={this.handle_change}
                  placeholder="Parole de membre"
                  value={this.state.form.parole}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.File
                  name="photoPortrait"
                  onChange={this.fileSelectedHandler}
                  label="Photo de profil (.jpeg , .jpg , .png)"
                  custom
                  data-browse="Choisir une image"
                />
              </Form.Group>
            </div>

            {/* Charte et RGPD  */}
            <div className="form_bloc">
              <p className={this.state.validCharte}>
                * Veuillez accepter la charte Cannes is Up et la RGPD pour
                continuer.
              </p>
              <Form.Check
                type="checkbox"
                name="checkCharte"
                onClick={this.handle_check}
                label="J'accepte la Charte Cannes is Up"
                required
              />
              <Form.Check
                type="checkbox"
                name="checkRgpd"
                onClick={this.handle_check}
                label="RGPD"
                required
              />
            </div>

            {/* Mode paiement */}
            <div className="form_bloc">
              <p className={this.state.choixPaiement}>
                * Veuillez choisir un moyen de paiment.
              </p>
              <Form.Check
                type="radio"
                name="paiement"
                label="CB"
                value="CB"
                onChange={this.handle_radio}
                required
              />
              <Form.Check
                type="radio"
                name="paiement"
                label="Virement"
                value="Virement"
                onChange={this.handle_radio}
                required
              />
            </div>

            {/* Bouton submit  */}
            <div className="btn">
              <button className="btn-default">Inscription</button>
            </div>
          </Form>
        </div>

        {/* Footer */}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default SignUp;
