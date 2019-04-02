import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/" className="home-icon">
          <Icon>home</Icon>
        </Link>
        <Link className="nav-link" to="/login">
          <span>Log In / Sign Up</span>
        </Link>
      </div>
    );
  }
}

export default NavBar;
