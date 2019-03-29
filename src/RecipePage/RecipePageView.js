import React, { Component } from "react";
import RecipeImage from "../RecipeList/RecipeImage";

class RecipePageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.location.state.recipe
    };
  }

  render() {
    const recipe = this.state.recipe;
    return (
      <div>
        <h1>{recipe.title}</h1>
        <RecipeImage {...recipe} />
        <h3>Ingredients</h3>
        <ul>
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <div>
          <h3>Directions</h3>
          <p>Directions here.....</p>
        </div>
      </div>
    );
  }
}

export default RecipePageView;
