import React from "react";
import "./Comment.css";
import { Icon } from "react-materialize";

function CommentItem(comment) {
  return (
    <div key={comment._id}>
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
