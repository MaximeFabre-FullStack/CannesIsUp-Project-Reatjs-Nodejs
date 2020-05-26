import React, { Component } from "react";
import NavbarAdherent from "../Navbar/NavbarAdherent/NavbarAdherent";
import NavbarAdmin from "../Navbar/NavbarAdmin/NavbarAdmin";
import NavbarVisiteurs from "../Navbar/NavbarVisiteurs/NavbarVisiteurs";
import Footer from "../Footer/Footer";
import { affichageNavbar } from "../affichageNavbar";

import "../../mainStyle.css";
import "../SignUp/style.css";
import "./NotFound.css";

class notFound extends Component {
  render() {
    return (
      <div className="page404Container">
        {affichageNavbar()}
        <div className="center">
          <h1>404 NOT FOUND</h1>
        </div>
        <div className="img404">
          <img src="./assets/img/404.jpg" alt="404" />
        </div>
        <div className="logo404">
          <img src="./assets/img/logo.png" alt="404" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default notFound;
