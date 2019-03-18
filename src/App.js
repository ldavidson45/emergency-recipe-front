import React, { Component } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div className="title">
            <Title />
          </div>

          <div className="search-bar">
            <SearchBar />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
