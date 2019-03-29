import React, { Component } from "react";

class RecipePageView extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <img src="/{recipe._id}" />
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
