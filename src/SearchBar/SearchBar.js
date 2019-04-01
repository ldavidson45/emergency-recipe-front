import React, { Component } from "react";
import "./SearchBar.css";
import SearchChips from "./SearchChips";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray: [],
      ingredient: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    console.log(event.target.value);
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
    }
  }

  handleDelete(event) {
    console.log("deleted");
  }

  render() {
    return (
      <div className="search-container">
        <p>Search By Ingredients</p>
        <SearchChips {...this.state} handleDelete={this.handleDelete} />
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleSubmit}
          className="search-input"
        />
      </div>
    );
  }
}

export default SearchBar;
