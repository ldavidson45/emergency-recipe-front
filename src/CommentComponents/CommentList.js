import React from "react";
import CommentItem from "./CommentItem";

function CommentList(recipe) {
  const commentsArray = recipe.comments;
  let commentItems = [];
  if (commentsArray) {
    commentItems = commentsArray.map(comment => {
      return <CommentItem {...comment} />;
    });
  }

  return <div className="comments-list">{commentItems}</div>;
}
export default CommentList;
