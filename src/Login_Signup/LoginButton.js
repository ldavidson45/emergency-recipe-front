import React, { Component } from "react";

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleSubmitLogin(event) {
    this.props.handleLogin(event, this.props.username, this.props.password);
    if (this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <button
        onClick={this.handleSubmitLogin}
        type="submit"
        name="log-in"
        className="login-button"
      >
        LOG IN
      </button>
    );
  }
}

export default LoginButton;
