import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentList from "../CommentComponents/CommentList";
import "./RecipeView.css";
import { Col, CardPanel, Row } from "react-materialize";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let recipeID = this.props.match.params.id;
    const API_URL =
      "https://emergency-recipe-backend.herokuapp.com/api/recipe/";
    fetch(API_URL + recipeID)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const selectedRecipe = this.state.recipe;

    if (selectedRecipe.picture) {
      return (
        <Row>
          <Col m={12} s={12}>
            <CardPanel className="recipe-container">
              <h4 className="recipe-title">{selectedRecipe.title}</h4>
              <Row>
                <Col m={6} s={6}>
                  <img className="recipe-image" src={selectedRecipe.picture} />
                </Col>
                <Col m={6} s={6}>
                  <h5 className="section-title">Ingredients</h5>
                  <p>{selectedRecipe.keyIngredients}</p>
                </Col>
              </Row>
              <Row>
                <h5 className="section-title">Directions</h5>
                <p>{selectedRecipe.instructions}</p>
              </Row>
              <Row>
                <h5>Comments</h5>
                <CommentList {...this.state} {...this.props} />
                {/* commentInput */}
              </Row>
            </CardPanel>
          </Col>
        </Row>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default RecipeView;
