import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authenticatedAdmin } from "../Authenticate/AuthenticateAdmin";
// import { authenticatedPage } from "../Authenticate/AuthenticatePage";

import "./App.css";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Annuaire from "../Annuaire/Annuaire";
import FicheAdherent from "../FicheAdherent/FicheAdherent";
import AnnuaireAdmin from "../Admin/AdminAnnuaire";
import AdminChart from "../Admin/AdminChart/AdminChart";
import NotFound from "../NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/annuaire" component={Annuaire} />

          <Route exact path="/ficheadherent/:id" component={FicheAdherent} />

          <Route
            path="/admin/annuaire"
            component={authenticatedAdmin(AnnuaireAdmin)}
          />

          <Route
            path="/admin/charts"
            component={authenticatedAdmin(AdminChart)}
          />

          <Route exact path="/notfound404" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
