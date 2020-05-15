import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SignUp from "../SignUp/SignUp";
import Annuaire from "../Annuaire/Annuaire";
import FicheAdherent from "../FicheAdherent/FicheAdherent";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Sign up route */}
          <Route path="/signup">
            <SignUp />
          </Route>
          {/* Annuaire route */}
          <Route path="/annuaire">
            <Annuaire />
          </Route>
          {/* Fiche Adhérent */}
          <Route path="/ficheadherent">
            <FicheAdherent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
