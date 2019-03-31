import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";
import RecipePageView from "./RecipePage/RecipePageView";
import Home from "./Home/Home.js";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route
            path="/recipe/:id"
            render={props => {
              return <RecipePageView {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
