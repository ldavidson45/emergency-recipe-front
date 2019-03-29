import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";
import RecipePageView from "./RecipePage/RecipePageView";

class App extends Component {
  render() {
    return (
      <div>
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
