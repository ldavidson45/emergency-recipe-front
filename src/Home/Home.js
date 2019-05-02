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
        <section className="home-details-container">
          <h3 className="bold-title">Reverse engineer your recipe search.</h3>
          <h5>
            Gone are the days of throwing away ingredients that you don't have
            any use for. Emergency Recipe can help you create meals using items
            you already have.{" "}
          </h5>
          <h5 className="emphasis-text">
            Type your ingredients in the search bar and see all of the
            possibilities!
          </h5>
          <p className="sub-text">
            Note: the backend server is hosted on a free version of Heroku. To
            wake the server up, run a search then refresh the page.
          </p>
        </section>
        <SearchBar handleSearch={this.handleSearch} />
        <RecipeList {...this.state} />
      </main>
    );
  }
}

export default Home;
