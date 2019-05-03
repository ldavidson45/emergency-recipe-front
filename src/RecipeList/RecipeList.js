import React, { Component } from "react";
import "../RecipeList/Recipe.css";
import RecipeCard from "./RecipeCard";

class RecipeList extends Component {
  render() {
    let recipelist = this.props.searchResults.map(recipe => {
      return <RecipeCard key={recipe._id} {...recipe} />;
    });

    return <section className="recipe-list">{recipelist}</section>;
  }
}

export default RecipeList;
