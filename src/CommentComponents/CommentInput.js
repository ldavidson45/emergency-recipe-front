import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import "./Comment.css";

class CommentInput extends Component {
  render() {
    return (
      <div className="comment-input-container">
        <Icon className="user-icon" small>
          perm_identity
        </Icon>
        <textarea
          className="comment-input-field"
          placeholder="Leave a comment..."
        />
        <Button type="submit" waves="light">
          Submit
        </Button>
      </div>
    );
  }
}

export default CommentInput;
