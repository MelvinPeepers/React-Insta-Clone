import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="post-info">
      {props.posts.map(post => (
        <Post post={post} key={post.username} />
      ))}
    </div>
  );
};

export default PostContainer;
