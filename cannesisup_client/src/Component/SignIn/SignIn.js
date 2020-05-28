import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

import "../../../src/mainStyle.css";
import "./style.css";
import NavbarVisiteurs from "../Navbar/NavbarVisiteurs/NavbarVisiteurs";
import Footer from "../Footer/Footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSignIn: "",
      motDePasseSignIn: "",
      modalShow: false,
      setModalShow: false,
    };
  }

  recup_info = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  redirection = (uid, token, admin) => {
    if (uid && token && admin) {
      this.props.history.push("/admin/annuaire");
    } else if (uid && token) {
      this.props.history.push("/adherent/" + uid);
    }
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
          if (!data || !data.exist) {
            this.setState({ modalShow: true, setModalShow: true });
            return;
          } else {
            const uid = data.userId;
            const token = data.token;
            let admin = data.admin;
            localStorage.setItem("uid", uid);
            localStorage.setItem("token", token);
            admin ? localStorage.setItem("admin", admin) : (admin = false);

            this.redirection(uid, token, admin);
          }
        },

        (error) => {
          this.setState({ modalShow: true, setModalShow: true });
        }
      );
  };

  onHide = () => this.setState({ modalShow: false });

  modal = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.modalShow}
        onHide={() => this.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Une erreur est survenue</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Il semblerait qu'une erreur soit survenue, verifiez les champs
            renseignés et réesayez.
          </p>
          <p>
            {" "}
            (Il se peut aussi que votre compte n'ai pas encore été validé par
            l'administrateur).
          </p>
          <p>
            {" "}
            N'hesitez pas a nous contacter si vous rencontrez des difficultés,
            nous nous ferons un plaisir de vous aider.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" onClick={this.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  render() {
    return (
      <div>
        <NavbarVisiteurs />

        <div className="main-container">
          <div className="center">
            <h1>Connexion</h1>
          </div>
          {this.modal()}
          <div className="message-container cadre">
            <Form onSubmit={this.requeteInfo}>
              <h3> Identifiants de votre compte</h3>
              <Form.Group>
                <Form.Label>Adresse Email (privée) *</Form.Label>
                <Form.Control
                  name="emailSignIn"
                  onChange={this.recup_info}
                  type="text"
                  placeholder="exemple@ex.com"
                  value={this.state.emailSignIn}
                  className="inputSigninMail"
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
                  className="inputSigninMdp"
                />
                <Link to="/passwordreset">
                  <h4>Mot de passe oublié?</h4>
                </Link>
              </Form.Group>

              <button className="btn-default">Connexion</button>
            </Form>
          </div>
        </div>
        <div className="footerSignin">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
