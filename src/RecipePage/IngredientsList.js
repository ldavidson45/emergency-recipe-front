import React from "react";
import { Chip } from "react-materialize";

function IngredientsList(recipe) {
  let ingredientsArray = [];
  if (recipe.keyIngredients) {
    ingredientsArray = recipe.keyIngredients.map(ingredient => {
      let key = Math.random() + ingredient;

      return (
        <li className="ingredient-item" key={key}>
          - {ingredient}
        </li>
      );
    });
    return (
      <div>
        <h4 className="recipe-section-heading">Ingredients</h4>
        <ul className="ingredients-list">{ingredientsArray}</ul>
      </div>
    );
  } else {
    return <div />;
  }

  return (
    <div className="ingredients-container">
      <h4 className="recipe-section-heading">Ingredients</h4>
      <div className="ingredients-grid">{ingredientsArray}</div>
    </div>
  );
}

export default IngredientsList;
