import React from "react";
import { Modal } from "react-materialize";
import { Link } from "react-router-dom";
import RecipeImage from "./RecipeImage";
import "./Recipe.css";

function RecipeCard(recipe) {
  return (
    <Modal
      header={recipe.title}
      trigger={
        <article className="recipe-card">
          <RecipeImage {...recipe} />
          <h5 className="recipe-card-title">{recipe.title}</h5>
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
