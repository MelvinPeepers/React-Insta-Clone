import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  //   console.log(props);
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} className="igphoto" alt="profile" />
        <p>{props.post.username}</p>
      </div>
      <div className="post-hero-image">
        <div>
          <img src={props.post.imageUrl} className="imgurl" alt="main-post" />
        </div>
      </div>
      <div className="likes-container">
        <div className="social-comment-icons">
          <i className="far fa-heart fa-2x" />
          <i className="far fa-comment fa-2x fa-flip-horizontal" />
        </div>
        <div className="social-likes">
          <p>{props.post.likes} likes</p>
        </div>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
