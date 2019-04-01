import React, { Component } from "react";
import "./SearchBar.css";
import SearchChips from "./SearchChips";
import { Button } from "react-materialize";

const searchBarStyle = {
  border: "solid 1px black",
  borderRadius: "10px",
  padding: "0 10px"
};

const buttonStyle = {
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  margin: " 0 0 20px 10px",
  background: "#fb9039"
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
      this.triggerSearch(event);
    }
  }

  triggerSearch(event) {
    event.preventDefault();
    this.props.handleSearch(event, this.state.searchArray);
  }

  render() {
    return (
      <div className="search-container">
        <p className="search-title">Search By Ingredients</p>
        <SearchChips {...this.state} handleDelete={this.handleDelete} />
        <div className="search-form">
          <input
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit}
            className="search-input"
            style={searchBarStyle}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
