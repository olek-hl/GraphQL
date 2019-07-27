import React, { Component } from "react";

class ReplyItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { replyText, id } = this.props;
    return (
      <p className="reply">
        {replyText} <span className="id">#{id.substr(id.length - 3)}</span>
      </p>
    );
  }
}

export default ReplyItem;
