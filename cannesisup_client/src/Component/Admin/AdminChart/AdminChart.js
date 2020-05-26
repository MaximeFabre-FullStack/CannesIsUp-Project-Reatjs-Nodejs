import React, { Component } from "react";

import "../../../mainStyle.css";
import "./AdminChart.css";

import NavbarAdmin from "../../Navbar/NavbarAdmin/NavbarAdmin";
import Footer from "../../Footer/Footer";

import Bar from "./Charts/Bar";
import PieChart from "./Charts/PieChart";
import LineGraph from "./Charts/LineGraph";

class Annuaire extends Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="annuaireContainer">
          <div className="center">
            <h1>Charts Admin</h1>
          </div>
          <div className="bar">
            <Bar />
          </div>
          <div className="piechart">
            <PieChart />
          </div>
          <div className="linegraph">
            <LineGraph />
          </div>
        </div>
        <footer className="adminFooter">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Annuaire;
