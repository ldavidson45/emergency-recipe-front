import React, { Component } from "react";
import { Col, Row, Collection } from "react-materialize";
import CommentItem from "./CommentItem";
import "./CommentComponents.css";

class CommentList extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    console.log(event.target);
  }

  render() {
    let comments = this.props.recipe.comments;
    let commentItemComponents = [];

    if (this.props.recipe.comments) {
      commentItemComponents = comments.map((comment, id) => {
        return <CommentItem comment={comment} key={id} {...this.props} />;
      });
    }

    return (
      <Row>
        <Col m={6} s={12} className="comments-container">
          <Collection>{commentItemComponents}</Collection>
        </Col>
      </Row>
    );
  }
}
export default CommentList;
