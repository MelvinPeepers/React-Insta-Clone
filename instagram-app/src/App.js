import React from "react";
import SearchBar from "./componenets/SearchBar/SearchBar";
import PostContainer from "./componenets/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./componenets/SearchBar/SearchBar.css";
import "./componenets/PostContainer/PostContainer.css";
import "./componenets/CommentSection/CommentSection.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <div className='header'>
          <SearchBar />
        </div>
        <div className='post-container'>
          <PostContainer posts={posts} />
        </div>
        {/* <div className="comment-container">
          <CommentSection igComment={this.state.posts} />
        </div> */}
      </div>
    );
  }
}

export default App;
