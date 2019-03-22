import React, { Component } from "react";
import { Col } from "react-materialize";
import "./RecipeView.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import axios from "axios";

const API_URL =
  "https://emergency-recipe-backend.herokuapp.com/api/comment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Placeholder",
      content: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.content);
  }

  onSubmit(event) {
    event.preventDefault();
    let commentPath = this.props.location.pathname;

    axios.post(API_URL + commentPath, this.state).then(res => {
      console.log("response", res);
      this.props.getData();
    });
  }

  onDeleteComment(event) {
    event.preventDefault();
    let commentId = event.target.value;
    console.log(event.target.value)
    axios.delete(API_URL + "/" + commentId).then(res => {
      console.log(res)
      this.props.getData();
    });

  }

  render() {
    return (
      <div>
        <Col s={12} m={12}>
          <h4>Comments</h4>
          <CommentForm
            {...this.state}
            {...this.props}
            handleUpdateRecipe={this.handleUpdateRecipe}
            onSubmit={this.onSubmit}
            onInputChange={this.onInputChange}
          />
          <CommentList onDeleteComment={this.onDeleteComment}{...this.state} {...this.props} />
        </Col>
      </div>
    );
  }
}
export default Comments;
