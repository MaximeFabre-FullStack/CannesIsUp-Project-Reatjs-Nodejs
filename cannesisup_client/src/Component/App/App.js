import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignUp from "../SignUp/SignUp";

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
          <Route path="/annuaire"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
