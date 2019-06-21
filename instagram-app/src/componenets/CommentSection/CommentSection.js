import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentAdd from "./CommentAdd";
import Comment from "./Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comments
    };
  }
  render() {
    const { comment } = this.state;
    return (
      <div>
        {comment.map(comment => (
          <Comment key={comment.likes} comment={comment} />
        ))}
        <CommentAdd comment={comment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
