import React, { Component } from "react";
import "./Login.css";

const inputStyle = {
  border: "solid 1px white",
  borderRadius: "25px",
  width: "90%",
  padding: "5px 15px",
  display: "block",
  margin: "10px auto 30px auto",
  color: "black",
  fontSize: "16px",
  fontFamily: "'Poppins', sans-serif",
  background: "transparent",
  shadowOffset: "none"
};

const titleStyle = {
  margin: "25px 25px 50px 25px",
  color: "white"
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="login-container">
        <form className="login-form">
          <h4 style={titleStyle}>Emergency Recipe</h4>
          <label for="username">
            USERNAME
            <input
              onChange={this.handleInputChange}
              name="username"
              type="text"
              style={inputStyle}
            />
          </label>
          <label for="password">
            PASSWORD
            <input
              onChange={this.handleInputChange}
              name="password"
              style={inputStyle}
              type="password"
            />
          </label>
          <button onClick={this.props.handleLogin} className="login-button">
            Log In
          </button>
          <button onClick={this.props.handleSignup} className="login-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
