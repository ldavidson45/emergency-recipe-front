import React, { Component } from "react";
import RecipeImage from "../RecipeList/RecipeImage";
import CommentList from "../CommentComponents/CommentList";
import CommentInput from "../CommentComponents/CommentInput";
import IngredientsList from "./IngredientsList";
import RecipeDirections from "./RecipeDirections";

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
      <main className="recipe-view-container">
        <h1>{recipe.title}</h1>
        <section className="image-ingredients-container">
          <RecipeImage {...recipe} />
          <IngredientsList {...recipe} />
        </section>
        <RecipeDirections {...recipe} />
        <CommentInput />
        <CommentList {...recipe} />
      </main>
    );
  }
}

export default RecipePageView;
