import React, { Component } from "react";
import { Chip } from "react-materialize";

class SearchChips extends Component {
  render() {
    let terms = this.props.searchArray.map((term, index) => {
      return (
        <Chip data={term} key={index} className="chip">
          {term}
        </Chip>
      );
    });
    return <div>{terms}</div>;
  }
}

export default SearchChips;
