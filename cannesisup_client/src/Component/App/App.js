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
import AdminModifAdherent from "../Admin/AdminModifAdherent/AdminModifAdherent";
import NotFound from "../NotFound/NotFound";
import Mail from "../Mail/Mail";
import MailResend from "../MailResend/MailResend";
import BackOfficeAdherent from "../BackOfficeAdherent/BackOfficeAdherent";
import SubmitMessage from "../SignUp/SubmitMessage/SubmitMessage";

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
            exact
            path="/admin/annuaire"
            component={authenticatedAdmin(AnnuaireAdmin)}
          />

          <Route
            exact
            path="/admin/charts"
            component={authenticatedAdmin(AdminChart)}
          />

          <Route
            exact
            path="/admin/modif/adherent/:id"
            component={authenticatedAdmin(AdminModifAdherent)}
          />

          <Route exact path="/adherent/:id" component={BackOfficeAdherent} />

          <Route exact path="/notfound404" component={NotFound} />

          <Route exact path="/confirmation" component={Mail} />

          <Route exact path="/resend/:email" component={MailResend} />

          <Route exact path="/submit/:email" component={SubmitMessage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
