import React, { Component } from "react";
import RecipeImage from "../RecipeList/RecipeImage";
import CommentList from "../CommentComponents/CommentList";

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
          <div className="ingredients-container">
            <h3>Ingredients</h3>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>Directions</h3>
          <p>These are the directions</p>
        </section>
        <CommentList {...recipe} />
      </main>
    );
  }
}

export default RecipePageView;
