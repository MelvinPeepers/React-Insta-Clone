import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment-text">
      <div className="user">{props.comment.username}</div>
      <div className="comment">{props.comment.text}</div>
    </div>
  );
};

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default Comment;
