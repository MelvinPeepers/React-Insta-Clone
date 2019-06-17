import React from "react";
import PropTypes from "prop-types";
import CommentAdd from "./CommentAdd";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comment.map((comments, index) => (
          <Comment key={index} comment={comments} />
        ))}
        <CommentAdd />
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
