import React, { Component } from "react";
import { Button } from "react-materialize";
import "./CommentForm.css";
import axios from "axios";

const API_URL = "https://emergency-recipe-backend.herokuapp.com/api/comment";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.username,
      content: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let commentPath = this.props.recipe._id;
    if (this.props.isLoggedIn) {
      axios.post(API_URL + commentPath, this.state).then(res => {
        this.props.getData();
      });
    } else {
      alert("Please log in or create a new account!");
    }
  }

  render() {
    return (
      <form>
        <textarea className="comment-input" rows="4" cols="40" />
        <Button
          className="submit-button"
          node="a"
          waves="light"
          style={{ marginRight: "5px" }}
        >
          Submit
        </Button>
      </form>
    );
  }
}
export default CommentForm;
