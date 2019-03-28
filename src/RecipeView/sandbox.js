// Recipe View

<div>
  <Card
    className="recipe-view-card"
    id="recipe-view"
    header={
      <CardTitle image={selectedRecipe.picture}>
        {selectedRecipe.title}
      </CardTitle>
    }
    actions={[
      <Link
        key={"update-recipe-link"}
        to={"/recipe/update/" + this.state.recipe._id}
      >
        <Button waves="light" className="pink">
          Update this Recipe
        </Button>
      </Link>
    ]}
  >
    <Row>
      <Col s={12} m={5} offset="l1 m1">
        <CardPanel className="recipe-box">
          <span>
            <b>Prep Time:</b> {selectedRecipe.prepTime}
          </span>
        </CardPanel>
      </Col>
      <Col s={12} m={5}>
        <CardPanel className="recipe-box">
          <span>
            <b>Servings:</b> {selectedRecipe.servings}
          </span>
        </CardPanel>
      </Col>
    </Row>

    <Row>
      {/* come back and map  */}
      <Col s={12} m={4}>
        <CardPanel className="recipe-box">
          <h5>Key Ingredients:</h5>
          {selectedRecipe.keyIngredients !== undefined ? (
            selectedRecipe.keyIngredients.map((ingredient, id) => {
              return (
                <p className="ingredient-item" key={id}>
                  {ingredient}
                </p>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </CardPanel>
      </Col>

      <Col s={12} m={8}>
        <CardPanel className="recipe-box">
          <h5>Directions</h5>
          <p className="direction-text">{selectedRecipe.instructions}</p>
        </CardPanel>
      </Col>
    </Row>
    <Row>
      <Comments {...this.state} {...this.props} getData={this.getData} />
    </Row>
  </Card>
</div>;

// Comment List

if (this.props.recipe.comments) {
  commentItemComponents = comments.map((comment, id) => {
    return <CommentItem comment={comment} key={id} {...this.props} />;
  });
}

return (
  <div>
    <Col s={12} m={7}>
      <CardPanel className="teal lighten-4 black-text">
        <h4>User Comments</h4>
        <div className="commentContainer">{commentItemComponents}</div>
      </CardPanel>
    </Col>
  </div>
);

//   comment Item

<div>
  <Row>
    <Col s={12} m={12}>
      <CardPanel className="pink white-text">
        <span>{this.props.comment.content}</span>
        <br />
        <Button waves="light" onClick={this.handleDelete}>
          Delete
        </Button>
      </CardPanel>
    </Col>
  </Row>
</div>;
