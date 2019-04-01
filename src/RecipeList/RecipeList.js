import React, { Component } from "react";
import "../RecipeList/Recipe.css";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "pizza",
    _id: "2309nfeiu",
    picture:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?output-quality=60&resize=1000:*",
    comments: [
      { name: "liz", content: "Great recipe!" },
      { name: "paul", content: "Bad recipe!" },
      { name: "yoshi", content: "ok recipe!" }
    ]
  },
  {
    title: "hotdogs",
    _id: "wei23",
    picture:
      "https://images.britcdn.com/wp-content/uploads/2017/06/the-wicked-noodle-645x968.jpg?w=1000&auto=format"
  },
  {
    title: "nachos",
    _id: "20gmo4nn",
    picture:
      "https://www.spendwithpennies.com/wp-content/uploads/2018/12/SpendWithPennies-Best-Loaded-Nachos-22.jpg"
  }
];

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipelist = recipes.map(recipe => {
      return <RecipeCard key={recipe._id} {...recipe} />;
    });

    return <div className="recipe-list">{recipelist}</div>;
  }
}

export default RecipeList;
