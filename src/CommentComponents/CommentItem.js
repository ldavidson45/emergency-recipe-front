import React from "react";
import "./Comment.css";
import { Icon, Button } from "react-materialize";

function CommentItem(comment) {
  return (
    <div>
      <p className="comment-item-container">
        <Icon className="user-icon" tiny>
          perm_identity
        </Icon>
        <span className="comment-author">{comment.name}</span>
        {comment.content}
      </p>
    </div>
  );
}

export default CommentItem;
