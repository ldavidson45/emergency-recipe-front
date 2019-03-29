import React from "react";

function RecipeImage(recipe) {
  return <img className="recipe-thumbnail" src={recipe.picture} />;
}

export default RecipeImage;
