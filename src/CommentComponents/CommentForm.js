import React, { Component } from "react";
import { Button } from "react-materialize";
import "./CommentForm.css";

class CommentForm extends Component {
  render() {
    return (
      <form>
        <textarea className="comment-input" rows="4" cols="40" />
        <Button
          className="submit-button"
          node="a"
          waves="light"
          small
          style={{ marginRight: "5px" }}
        >
          Submit
        </Button>
      </form>
    );
  }
}
export default CommentForm;
