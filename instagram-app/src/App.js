import React from "react";
import SearchBar from "./componenets/SearchBar/SearchBar";
import PostContainer from "./componenets/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <SearchBar />
        </div>
        <div className="post-container" />
        <PostContainer igPost={this.state.posts} />
      </div>
    );
  }
}

export default App;
