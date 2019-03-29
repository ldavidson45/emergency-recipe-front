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
          <h5>{recipe.title}</h5>
          <RecipeImage {...recipe} />
        </article>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
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
