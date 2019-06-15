import React from "react";

const Post = props => {
  //   console.log(props);
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <img
          src={props.igInfo.thumbnailUrl}
          className="igphoto"
          alt="profile"
        />
        <p>{props.igInfo.username}</p>
      </div>
      <div className="post-hero-image">
        <div>
          <img src={props.igInfo.imageUrl} className="imgurl" alt="main-post" />
        </div>
      </div>
      <div className="likes-container">
        <div className="social-comment-icons">
          <i className="far fa-heart fa-2x" />
          <i className="far fa-comment fa-2x fa-flip-horizontal" />
        </div>
        <div className="social-likes">
          <p>{props.igInfo.likes} likes</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
