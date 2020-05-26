import React, { Component } from "react";
import NavbarAdherent from "../Navbar/NavbarAdherent/NavbarAdherent";
import NavbarAdmin from "../Navbar/NavbarAdmin/NavbarAdmin";
import NavbarVisiteurs from "../Navbar/NavbarVisiteurs/NavbarVisiteurs";
import Footer from "../Footer/Footer";

import "../../mainStyle.css";
import "../SignUp/style.css";
import "./NotFound.css";

class notFound extends Component {
  affichageNavbar = () => {
    const uid = localStorage.getItem("uid");
    const admin = localStorage.getItem("admin");
    const token = localStorage.getItem("token");
    if (uid && token && admin) {
      return <NavbarAdmin />;
    } else if (uid && token && !admin) {
      return <NavbarAdherent />;
    } else {
      return <NavbarVisiteurs />;
    }
  };
  render() {
    return (
      <div className="page404Container">
        {this.affichageNavbar()}
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
