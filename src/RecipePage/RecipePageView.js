import React, { Component } from "react";
import RecipeImage from "../RecipeList/RecipeImage";
import CommentList from "../CommentComponents/CommentList";
import CommentInput from "../CommentComponents/CommentInput";
import IngredientsList from "./IngredientsList";
import RecipeDirections from "./RecipeDirections";
import axios from "axios";

const rootAPI = "https://emergency-recipe.herokuapp.com/";

class RecipePageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.location.state.recipe,
      id: this.props.match.params.id
    };
    this.refreshData = this.refreshData.bind(this);
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    axios.get(`${rootAPI}api/recipe/${this.state.id}`).then(res => {
      this.setState({ recipe: res.data });
    });
  }

  render() {
    const recipe = this.state.recipe;
    return (
      <div className="recipe-page">
        <section className="recipe-page-heading">
          <img
            className="recipe-image-large"
            src={recipe.picture}
            alt={recipe.title}
          />
          {/* <RecipeImage {...recipe} /> */}
          <h3 className="recipe-title">{recipe.title}</h3>
        </section>
        <section className="recipe-page-content">
          <IngredientsList {...recipe} />
          <RecipeDirections {...recipe} />
        </section>
        <section className="comments-container">
          <h3 className="comment-section-title">Comments</h3>
          <CommentInput refreshData={this.refreshData} {...recipe} />
          <CommentList refreshData={this.refreshData} {...recipe} />
        </section>
      </div>
    );
  }
}

export default RecipePageView;
