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
        {this.state.comment.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentAdd comment={this.state.comment} />
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
