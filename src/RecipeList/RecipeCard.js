import React from "react";
import { Modal } from "react-materialize";
import { Link } from "react-router-dom";
import RecipeImage from "./RecipeImage";

function RecipeCard(recipe) {
  return (
    <Modal
      header={recipe.title}
      trigger={
        <article className="recipe-card">
          <h5 className="recipe-title">{recipe.title}</h5>
          <RecipeImage {...recipe} />
        </article>
      }
    >
      <p>{recipe.instructions}</p>
      <Link
        to={{
          pathname: `/recipe/${recipe._id}`,
          state: { recipe }
        }}
      >
        View
      </Link>
    </Modal>
  );
}

export default RecipeCard;
