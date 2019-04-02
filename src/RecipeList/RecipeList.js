import React, { Component } from "react";
import "../RecipeList/Recipe.css";
import RecipeCard from "./RecipeCard";

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipelist = this.props.searchResults.map(recipe => {
      return <RecipeCard key={recipe._id} {...recipe} />;
    });

    return <div className="recipe-list">{recipelist}</div>;
  }
}

export default RecipeList;
