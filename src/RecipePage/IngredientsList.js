import React from "react";
import { Chip } from "react-materialize";

function IngredientsList(recipe) {
  let ingredientsArray = [];
  if (recipe.keyIngredients) {
    ingredientsArray = recipe.keyIngredients.map(ingredient => {
      return <Chip key={ingredient}>{ingredient}</Chip>;
    });
  } else {
    return <div />;
  }

  return (
    <div className="recipe-container">
      <h4 className="recipe-section-heading">Ingredients</h4>
      <div className="ingredients-grid">{ingredientsArray}</div>
    </div>
  );
}

export default IngredientsList;
