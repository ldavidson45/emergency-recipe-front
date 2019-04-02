import React, { Component } from "react";
import "./Comment.css";
import { Icon } from "react-materialize";
import axios from "axios";
const rootAPI = "https://emergency-recipe.herokuapp.com/";

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(event) {
    event.preventDefault();
    axios.delete(`${rootAPI}api/comment/${this.props._id}`).then(res => {
      this.props.refreshData();
    });
  }

  render() {
    let deleteIcon;
    if (this.props.name === localStorage.username) {
      deleteIcon = (
        <button
          onClick={this.handleDeleteComment}
          className="delete-comment-icon"
        >
          <Icon tiny>delete</Icon>
        </button>
      );
    } else {
      deleteIcon = <p />;
    }
    return (
      <div key={this.props._id}>
        <div className="comment-item-container">
          <Icon className="user-icon" tiny>
            perm_identity
          </Icon>
          <span className="comment-author">{this.props.name}</span>
          {this.props.content}
          {deleteIcon}
        </div>
      </div>
    );
  }
}

export default CommentItem;
