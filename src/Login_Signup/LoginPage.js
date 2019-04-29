import React, { Component } from "react";
import "./Login.css";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

const inputStyle = {
  border: "solid 1px #1f3044",
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
          <h4 className="home-title">Emergency Recipe</h4>
          <label>
            USERNAME
            <input
              onChange={this.handleInputChange}
              name="username"
              type="text"
              style={inputStyle}
            />
          </label>
          <label>
            PASSWORD
            <input
              onChange={this.handleInputChange}
              name="password"
              style={inputStyle}
              type="password"
            />
          </label>
          <LoginButton {...this.props} {...this.state} />
          <SignupButton {...this.props} {...this.state} />
        </form>
      </div>
    );
  }
}

export default LoginPage;
