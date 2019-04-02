import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import RecipeList from "../RecipeList/RecipeList";
import axios from "axios";

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
        <SearchBar handleSearch={this.handleSearch} />
        <RecipeList {...this.state} />
      </main>
    );
  }
}

export default Home;
