import React from "react";
import "./Comment.css";
import { Icon, Button } from "react-materialize";

function CommentItem(comment) {
  let deleteIcon;
  if (comment.name === localStorage.username) {
    deleteIcon = (
      <button className="delete-comment-icon">
        <Icon tiny>delete</Icon>
      </button>
    );
  } else {
    deleteIcon = <p />;
  }
  return (
    <div key={comment._id}>
      <div className="comment-item-container">
        <Icon className="user-icon" tiny>
          perm_identity
        </Icon>
        <span className="comment-author">{comment.name}</span>
        {comment.content}
        {deleteIcon}
      </div>
    </div>
  );
}

export default CommentItem;
