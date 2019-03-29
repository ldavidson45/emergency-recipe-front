import React, { Component } from "react";

import { Col, Row, Card, CardTitle } from "react-materialize";

function RecipeCard(recipe) {
  return (
    <div>
      <Row>
        <Col m={4} s={12}>
          <Card
            header={<CardTitle image={recipe.picture} title={recipe.title} />}
          >
            {recipe.title}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RecipeCard;
