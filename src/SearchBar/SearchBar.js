import React, { Component } from "react";
import "./SearchBar.css";
import SearchChips from "./SearchChips";
import { Icon } from "react-materialize";

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

  handleSearch(event) {
    // call api search
    console.log(this.state.searchArray);
  }

  render() {
    return (
      <div className="search-container">
        <p>Search By Ingredients</p>
        <SearchChips {...this.state} handleDelete={this.handleDelete} />
        <div className="search-form">
          <input
            onChange={this.handleInputChange}
            onKeyDown={this.handleSubmit}
            className="search-input"
            style={searchBarStyle}
          />
          <Icon className="icon" onClick={this.handleSearch}>
            search
          </Icon>
        </div>
      </div>
    );
  }
}

export default SearchBar;
