import React from "react";

function CommentItem(comment) {
  return (
    <div>
      <p>
        <span>{comment.name}</span>-{comment.content}
      </p>
    </div>
  );
}

export default CommentItem;
