import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "../../mainStyle.css";
import "../SignUp/style.css";
import "./NotFound.css";

class notFound extends Component {
  render() {
    return (
      <div className="page404Container">
        <Navbar />
        <div className="center">
          <h1>404 NOT FOUND</h1>
        </div>
        <div className="img404">
          <img src="./assets/img/404.jpg" alt="404" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default notFound;
