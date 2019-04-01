import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link className="nav-link" to="/login">
          <span>Log In</span>
        </Link>
      </div>
    );
  }
}

export default NavBar;
