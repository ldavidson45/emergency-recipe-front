import React, { Component } from "react";
import { Route } from "react-router-dom";
import RecipeCard from "./RecipeList/RecipeCard";
import RecipeList from "./RecipeList/RecipeList";
import RecipePageView from "./RecipePage/RecipePageView";

class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <Route path="recipe/:id" component={RecipePageView} />
      </div>
    );
  }
}

export default App;
