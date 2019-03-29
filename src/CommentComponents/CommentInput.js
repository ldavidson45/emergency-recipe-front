import React, { Component } from "react";

class CommentInput extends Component {
  render() {
    return (
      <div>
        <textarea placeholder="Leave a comment..." />
        <button> Submit</button>
      </div>
    );
  }
}

export default CommentInput;
