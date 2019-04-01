import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RecipePageView from "./RecipePage/RecipePageView";
import Home from "./Home/Home.js";
import NavBar from "./NavBar/NavBar";
import LoginPage from "./Login_Signup/LoginPage";
import axios from "axios";

const rootAPI = "https://emergency-recipe.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    axios
      .post(rootAPI + "users/login", {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));

    console.log("login");
  }

  handleSignup(event) {
    event.preventDefault();
    axios
      .post(rootAPI + "users/login", {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.setState({ password: "" });
      })
      .catch(err => console.log(err));
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
