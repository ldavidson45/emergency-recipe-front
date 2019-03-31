import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import RecipeList from "../RecipeList/RecipeList";

class Home extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <RecipeList />
      </main>
    );
  }
}

export default Home;
