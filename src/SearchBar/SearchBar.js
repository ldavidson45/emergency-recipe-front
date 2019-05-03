import React, { Component } from "react";
import "./SearchBar.css";
import SearchChips from "./SearchChips";

const searchBarStyle = {
  border: "solid .05rem black",
  borderRadius: "2rem",
  padding: "0 2rem",
  background: "#9beed9",
  width: "90%"
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray: [],
      ingredient: "",
      searchResults: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      ingredient: event.target.value
    });
  }

  handleSubmit(event) {
    if (event.key === "Enter") {
      let array = this.state.searchArray;
      let newTerm = this.state.ingredient;
      array.push(newTerm);
      event.target.value = "";
      this.setState({
        searchArray: array
      });
      this.triggerSearch(event);
    }
  }

  triggerSearch(event) {
    event.preventDefault();
    this.props.handleSearch(event, this.state.searchArray);
  }

  render() {
    return (
      <section className="search-container">
        <SearchChips {...this.state} handleDelete={this.handleDelete} />
        <form className="search-form">
          <p className="search-title">Type an ingredient and press "enter"</p>
          <input
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit}
            className="search-input"
            style={searchBarStyle}
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
