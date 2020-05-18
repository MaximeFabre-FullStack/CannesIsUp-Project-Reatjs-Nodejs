import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Annuaire from "../Annuaire/Annuaire";
import FicheAdherent from "../FicheAdherent/FicheAdherent";
import AdminChart from "../AdminChart/AdminChart";
import NotFound from "../NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Sign up route */}
          <Route exact path="/signup">
            <SignUp />
          </Route>
          {/*SignIn route */}
          <Route exact path="/signin">
            <SignIn />
          </Route>
          {/* Annuaire route */}
          <Route exact path="/annuaire">
            <Annuaire />
          </Route>
          {/* Fiche Adhérent */}
          <Route exact path="/ficheadherent">
            <FicheAdherent />
          </Route>
          <Route exact path="/admin/charts">
            <AdminChart />
          </Route>
          <Route to="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
