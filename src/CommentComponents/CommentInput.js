import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import "./Comment.css";
import axios from "axios";

const rootAPI = "https://emergency-recipe.herokuapp.com/";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.username,
      content: ""
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(event) {
    event.preventDefault();
    axios.post(`${rootAPI}api/comment/recipe/${this.props._id}`).then(res => {
      this.props.refreshData();
    });
  }

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
        <Button onClick={this.addComment} type="submit" waves="light">
          Submit
        </Button>
      </div>
    );
  }
}

export default CommentInput;
