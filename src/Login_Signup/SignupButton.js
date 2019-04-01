import React, { Component } from "react";

class SignupButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }

  handleSubmitSignup(event) {
    this.props.handleSignup(event, this.props.username, this.props.password);
    this.props.history.push("/");
  }

  render() {
    return (
      <button
        onClick={this.handleSubmitSignup}
        type="submit"
        name="log-in"
        className="login-button"
      >
        Sign Up
      </button>
    );
  }
}

export default SignupButton;
