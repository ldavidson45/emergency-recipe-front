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
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogin(event, un, pw) {
    event.preventDefault();
    axios
      .post(rootAPI + "users/login", {
        username: un,
        password: pw
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({
          isLoggedIn: true,
          username: un
        });
      })
      .catch(err => alert(err));
    console.log(this.props);
    console.log("login");
  }

  handleSignup(event, un, pw) {
    event.preventDefault();
    axios
      .post(rootAPI + "users/signup", {
        username: un,
        password: pw
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({
          isLoggedIn: true,
          username: un
        });
      })
      .catch(err => alert(err));
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
