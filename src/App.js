import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipePageView from "./RecipePage/RecipePageView";
import Home from "./Home/Home.js";
import NavBar from "./NavBar/NavBar";
import LoginPage from "./Login_Signup/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoggedIn: false
    };
  }

  handleLogin(event, username, pw) {
    event.preventDefault();
    console.log("login");
  }

  handleSignup(event) {
    event.preventDefault();
    console.log("Signup");
  }
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
          <Route
            path="/login"
            render={props => {
              return (
                <LoginPage
                  {...this.state}
                  {...props}
                  handleLogin={this.handleLogin}
                  handleSignup={this.handleSignup}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
