import React, { Component } from "react";

function CommentList(recipe) {
  const commentsArray = recipe.comments;
  let commentItems = commentsArray.map(comment => {
    return (
      <div>
        <p>
          <span>{comment.name}</span>-{comment.content}
        </p>
      </div>
    );
  });
  return <div>{commentItems}</div>;
}
export default CommentList;
