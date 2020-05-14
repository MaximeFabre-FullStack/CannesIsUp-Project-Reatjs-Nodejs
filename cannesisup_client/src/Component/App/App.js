import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Annuaire from "../Annuaire/Annuaire";
import AdminChart from "../AdminChart/AdminChart";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Sign up route */}
          <Route path="/signup">
            <SignUp />
          </Route>
          {/*SignIn route */}
          <Route path="/signin">
            <SignIn />
          </Route>
          {/* Annuaire route */}
          <Route path="/annuaire">
            <Annuaire />
          </Route>
          <Route path="/admin">
            <AdminChart />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
