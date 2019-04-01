import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import RecipeList from "../RecipeList/RecipeList";
import axios from "axios";
import "./Home.css";

const rootAPI = "https://emergency-recipe.herokuapp.com/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event, array) {
    // call api search
    event.preventDefault();
    axios.post(rootAPI + "api/recipe", array).then(res => {
      this.setState({
        searchResults: res.data
      });
    });
  }

  render() {
    return (
      <main>
        <h1 className="home-title">Emergency Recipe</h1>
        <SearchBar handleSearch={this.handleSearch} />
        <RecipeList {...this.state} />
      </main>
    );
  }
}

export default Home;
