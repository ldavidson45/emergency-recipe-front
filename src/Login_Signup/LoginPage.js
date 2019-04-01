import React, { Component } from "react";
import "./Login.css";

const inputStyle = {
  border: "solid 1px white",
  borderRadius: "25px",
  width: "90%",
  padding: "1%",
  display: "block",
  margin: "10px auto 30px auto",
  color: "black",
  fontSize: "16px",
  fontFamily: "'Poppins', sans-serif;"
};

const titleStyle = {
  margin: "25px 25px 50px 25px",
  color: "white"
};

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="login-form">
          <h4 style={titleStyle}>Emergency Recipe</h4>
          <label for="username">
            USERNAME
            <input name="username" type="text" style={inputStyle} />
          </label>
          <label for="password">
            PASSWORD
            <input name="password" style={inputStyle} type="password" />
          </label>
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
