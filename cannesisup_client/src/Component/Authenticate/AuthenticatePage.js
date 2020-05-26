import React from "react";
import { Redirect } from "react-router-dom";

export function authenticatedPage(Component) {
  const componentName = Component.displayName || Component.name || "Component";

  return class extends React.Component {
    static displayName = `Route(${componentName})`;

    renderPage() {
      return <Component {...this.props} />;
    }

    render() {
      const token = localStorage.getItem("token");
      const uid = localStorage.getItem("uid");
      if (token && uid) {
        return this.renderPage();
      } else {
        return <Redirect to="/notfound404" />;
      }
    }
  };
}
