import React from "react";
import { Component } from "react";
import { Mutation } from "react-apollo";
import { UPDATE_LIKES_MUTATION, UPDATE_DISLIKES_MUTATION } from "../../queries";
import ReplyList from "../Reply/ReplyList";

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, messageText, likes, dislikes, replies } = this.props;
    return (
      <div className="message-item">
        <h2>
          <span className="message-text">{messageText}</span>{" "}
          <span className="id">#{id.substr(id.length - 5)}</span>
        </h2>
        <div className="reaction">
          <Mutation mutation={UPDATE_LIKES_MUTATION} variables={{ id }}>
            {postMutation => (
              <i onClick={postMutation} className="fa fa-thumbs-up" />
            )}
          </Mutation>
          <span> {likes}</span>
          <Mutation mutation={UPDATE_DISLIKES_MUTATION} variables={{ id }}>
            {postMutation => (
              <i onClick={postMutation} className="fa fa-thumbs-down" />
            )}
          </Mutation>
          <span> {dislikes}</span>
        </div>
        <ReplyList
          messageId={id}
          replies={replies}
          orderBy={this.props.orderBy}
        />
      </div>
    );
  }
}

export default MessageItem;
