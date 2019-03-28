import React, { Component } from "react";
import { CollectionItem } from "react-materialize";

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let commentID = this.props.comment._id;
    let apiURL =
      "https://emergency-recipe-backend.herokuapp.com/api/comment/" + commentID;
    fetch(apiURL, {
      method: "DELETE"
    })
      .then(res => {
        res.json();
      })
      .then(res => {
        this.props.getData();
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <CollectionItem>
        <p>{this.props.comment.content}</p>
        <p>-{this.props.comment.name}</p>
      </CollectionItem>
    );
  }
}

export default CommentItem;
