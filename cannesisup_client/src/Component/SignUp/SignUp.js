import React, { Component } from "react";

import { Form, Col, Badge } from "react-bootstrap";
import axios from "axios";

import Footer from "../Footer/Footer";

import "../../../src/mainStyle.css";
import "./style.css";
import NavbarVisiteurs from "../Navbar/NavbarVisiteurs/NavbarVisiteurs";
import { withRouter, Link } from "react-router-dom";
import url from "../../url.json";

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
    };
  }

  // RECUPERATION DES INPUTS
  handle_change = async (e) => {
    await this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
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
  };

  // RECUPERE VALEUR CHECKBOX
  handle_radio = async (e) => {
    if (e.target.checked === true) {
      await this.setState({
        form: { ...this.state.form, [e.target.name]: e.target.value },
      });
    }
  };

  // REQUETE POST
  submitForm = (e) => {
    e.preventDefault();

    if (this.state.form.password !== this.state.form.password_confirm) {
      window.scrollTo(0, 0);
      return;
    } else {
      const formData = new FormData(e.target);

      axios({
        method: "post",
        url: url["url-server"] + "/adherents",
        data: formData,
      }).then(
        (res) => {
          if (res.data.success) {
            return this.props.history.push("/submit/" + this.state.form.email);
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

  // FILTRE CHAMPS NUMERIQUE
  isInputNumber = (evt) => {
    var ch = String.fromCharCode(evt.which);
    if (!/[0-9]/.test(ch)) {
      evt.preventDefault();
    }
  };

  // RENDER PAGE
  render() {
    return (
      <div>
        {/* Barre de Navigation */}
        <NavbarVisiteurs />
        {/* Formulaire */}
        <div className="form_container">
          <div className="center">
            <h1>Formulaire</h1>
          </div>

          <Form onSubmit={this.submitForm}>
            {/* Identifiants  */}
            <div className="form_bloc">
              <h3> Identifiants de votre compte</h3>
              {/* EMAIL  */}
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
                {/* SECURITE  */}
                {this.state.form.email === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer une adresse email.
                  </Badge>
                )}
              </Form.Group>
              {/* MOT DE PASSE  */}
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
                {/* SECURITE  */}
                {this.state.form.password === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer un mot de passe.
                  </Badge>
                )}
                {this.state.form.password !==
                  this.state.form.password_confirm && (
                  <Badge className="champsNonValide">
                    *Mots de passe différents.
                  </Badge>
                )}
                {this.state.form.password ===
                  this.state.form.password_confirm &&
                  this.state.form.password !== "" && (
                    <Badge className="champsValide">
                      *Mots de passe identiques.
                    </Badge>
                  )}
              </Form.Group>
              {/* CONFIRMATION DU MOT DE PASSE  */}
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
                {/* SECURITE  */}
                {this.state.form.password !==
                  this.state.form.password_confirm && (
                  <Badge className="champsNonValide">
                    *Mots de passe différents.
                  </Badge>
                )}
                {this.state.form.password ===
                  this.state.form.password_confirm &&
                  this.state.form.password !== "" && (
                    <Badge className="champsValide">
                      *Mots de passe identiques.
                    </Badge>
                  )}
              </Form.Group>
            </div>

            {/* Infos sociétés  */}
            <div className="form_bloc">
              <h3> Informations sur votre société</h3>
              {/* NOM SOCIETE  */}
              <Form.Group>
                <Form.Label>Nom *</Form.Label>
                <Form.Control
                  name="nom"
                  onChange={this.handle_change}
                  placeholder="Nom de votre société"
                  value={this.state.form.nom}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.nom === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer le nom de votre société.
                  </Badge>
                )}
              </Form.Group>
              {/* ADRESSE  */}
              <Form.Group>
                <Form.Label>Adresse *</Form.Label>
                <Form.Control
                  name="adresse"
                  onChange={this.handle_change}
                  placeholder="221B Baker St"
                  value={this.state.form.adresse}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.adresse === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer l'adresse de votre société.
                  </Badge>
                )}
              </Form.Group>
              {/* COMPLEMENT ADRESE  */}
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
                {/* CODE POSTAL  */}
                <Col>
                  <Form.Group>
                    <Form.Label>Code postal * </Form.Label>
                    <Form.Control
                      name="code_postal"
                      onChange={this.handle_change}
                      placeholder="06000"
                      value={this.state.form.code_postal}
                      required
                      onKeyPress={this.isInputNumber}
                    />
                    {/* SECURITE  */}
                    {this.state.form.code_postal === "" && (
                      <Badge className="champsNonValide">
                        *Veuillez entrer le code postal de votre société.
                      </Badge>
                    )}
                  </Form.Group>
                </Col>
                {/* VILLE  */}
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
                    {/* SECURITE  */}
                    {this.state.form.ville === "" && (
                      <Badge className="champsNonValide">
                        *Veuillez entrer la ville de votre société.
                      </Badge>
                    )}
                  </Form.Group>
                </Col>
              </Form.Row>
              {/* TELEPHONE  */}
              <Form.Group>
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  name="tel"
                  onChange={this.handle_change}
                  placeholder="0400000000"
                  value={this.state.form.tel}
                  onKeyPress={this.isInputNumber}
                />
              </Form.Group>
              {/* ADRESSE EMAIL PUBLIQUE  */}
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
              {/* SITE INTERNET  */}
              <Form.Group>
                <Form.Label>Site internet</Form.Label>
                <Form.Control
                  name="site"
                  onChange={this.handle_change}
                  placeholder="Votre site web"
                  value={this.state.form.site}
                />
              </Form.Group>
              {/* RESEAUX SOCIAUX  */}
              <Form.Group>
                <h4>Réseaux sociaux</h4>
                <Form.Row>
                  {/* FACEBOOK  */}
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
                  {/* INSTAGRAM  */}
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
                  {/* LINKEDIN  */}
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
                  {/* TWITTER  */}
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
              {/* SECTEUR ACTIVITE  */}
              <Form.Group>
                <Form.Label>Secteur d'activité *</Form.Label>
                <Form.Control
                  name="activite"
                  onChange={this.handle_change}
                  placeholder="Votre secteur d'activité"
                  value={this.state.form.activite}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.activite === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer le secteur d'activité de votre société.
                  </Badge>
                )}
              </Form.Group>
              {/* DESCRIPTION ACTIVITE  */}
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
                {/* SECURITE  */}
                {this.state.form.description === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer une brève description de votre société.
                  </Badge>
                )}
              </Form.Group>
              {/* LOGO SOCIETE  */}
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
                {/* SECURITE  */}
                {this.state.form.logo === null && (
                  <Badge className="champsNonValide">
                    *Veuillez télécharger le logo de votre société.
                  </Badge>
                )}
              </Form.Group>
              {/* PHOTO DE COUVERTURE  */}
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
              {/* DOSSIER PRESENTATION  */}
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
              {/* NOM DIRIGEANT */}
              <Form.Group>
                <Form.Label>Nom *</Form.Label>
                <Form.Control
                  name="nomDirigeant"
                  onChange={this.handle_change}
                  placeholder="Nom du dirigeant"
                  value={this.state.form.nomDirigeant}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.nomDirigeant === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer le nom du dirigeant de la société.
                  </Badge>
                )}
              </Form.Group>
              {/* PRENOM DIRIGEANT  */}
              <Form.Group>
                <Form.Label>Prénom *</Form.Label>
                <Form.Control
                  name="prenomDirigeant"
                  onChange={this.handle_change}
                  placeholder="Prénom du dirigeant"
                  value={this.state.form.prenomDirigeant}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.prenomDirigeant === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer le prénom du dirigeant de la société.
                  </Badge>
                )}
              </Form.Group>
              {/* FONCTION DIRIGEANT  */}
              <Form.Group>
                <Form.Label>Fonction *</Form.Label>
                <Form.Control
                  name="fonction"
                  onChange={this.handle_change}
                  placeholder="Fonction du dirigeant"
                  value={this.state.form.fonction}
                  required
                />
                {/* SECURITE  */}
                {this.state.form.fonction === "" && (
                  <Badge className="champsNonValide">
                    *Veuillez entrer la fonction du dirigeant de la société.
                  </Badge>
                )}
              </Form.Group>
              {/* PAROLE DE MEMBRE  */}
              <Form.Group>
                <Form.Label>Parole de membre </Form.Label>
                <Form.Control
                  name="parole"
                  onChange={this.handle_change}
                  placeholder="Parole de membre"
                  value={this.state.form.parole}
                />
              </Form.Group>
              {/* PHOTO PORTRAIT  */}
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.File
                  name="photoPortrait"
                  onChange={this.fileSelectedHandler}
                  label={this.renderName("photoPortrait")}
                  custom
                  data-browse="Choisir une image"
                />
              </Form.Group>
            </div>

            {/* Charte et RGPD  */}
            <div className="form_bloc">
              {/* VERIFICATION  */}
              {this.state.form.checkCharte &&
              this.state.form.checkRgpd ? null : (
                <Badge className="champsNonValide">
                  *Veuilles accepter la charte et le RGPD.
                </Badge>
              )}
              {/* CHECKBOX  */}
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
                label={<Link to="/rgpd"> Charte RGPD </Link>}
                required
              />
            </div>

            {/* Mode paiement */}
            <div className="form_bloc">
              {/* VERIFICATION  */}
              {!this.state.form.paiement && (
                <Badge className="champsNonValide">
                  * Veuillez choisir un moyen de paiment.
                </Badge>
              )}
              {/* RADIO  */}
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

export default withRouter(SignUp);
