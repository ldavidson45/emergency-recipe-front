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
        <p className="sub-text">
          Note: the backend server is hosted on a free version of Heroku. To
          wake the server up, run a search then refresh the page.
        </p>
        <SearchBar handleSearch={this.handleSearch} />
        <RecipeList {...this.state} />
      </main>
    );
  }
}

export default Home;
