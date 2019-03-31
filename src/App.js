import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";
import RecipePageView from "./RecipePage/RecipePageView";
import Home from "./Home/Home.js";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
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
