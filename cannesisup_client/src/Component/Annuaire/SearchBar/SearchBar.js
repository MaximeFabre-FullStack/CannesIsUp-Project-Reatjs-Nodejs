import React, { Component } from "react";

import SearchField from "react-search-field";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="barreRecherche">
        <SearchField
          placeholder="Recherchez : un membre, une activité, un mot clé..."
          className="react-search-field "
        />
      </div>
    );
  }
}

export default SearchBar;
