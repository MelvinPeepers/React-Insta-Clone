import React from "react";
import Post from "./Post";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-info">
      {props.igPost.map(postInfo => (
        <Post igInfo={postInfo} key={postInfo.username} />
      ))}
    </div>
  );
};

export default PostContainer;
