import React from "react";
import { Redirect } from "react-router-dom";

export function authenticatedAdmin(Component) {
  const componentName = Component.displayName || Component.name || "Component";

  return class extends React.Component {
    static displayName = `Route(${componentName})`;

    renderPage() {
      return <Component {...this.props} />;
    }

    render() {
      const token = localStorage.getItem("token");
      const uid = localStorage.getItem("uid");
      const admin = localStorage.getItem("admin");
      if (token && uid && admin) {
        return this.renderPage();
      } else {
        return <Redirect to="/notfound404" />;
      }
    }
  };
}
