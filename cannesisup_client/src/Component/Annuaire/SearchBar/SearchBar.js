import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarData: " ",
    };
  }

  handleSearchBar = (e) => {
    this.setState({ searchBarData: e.target.value });
    const listInfos = this.state.searchBarData;
    this.props.callbackDuParent(listInfos);
  };

  render() {
    return (
      <div className="barreRecherche">
        <Form.Control
          placeholder="Recherchez : un membre, une activité, un mot clé..."
          className="react-search-field "
          onChange={this.handleSearchBar}
        />
      </div>
    );
  }
}

export default SearchBar;
