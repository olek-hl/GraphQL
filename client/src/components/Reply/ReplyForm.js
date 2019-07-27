import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { MESSAGE_QUERY, POST_REPLY_MUTATION } from "../../queries";

class ReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyText: ""
    };
  }
  render() {
    let props = this.props;
    let replyText = this.state.replyText;

    const ifNotEmpty = mutation => {
      if (replyText.trim().length > 0) mutation(replyText);
    };

    const _updateStoreAfterReply = (store, newReply, messageId) => {
      const data = store.readQuery({
        query: MESSAGE_QUERY,
        variables: {
          orderBy: props.orderBy,
          filter: "",
          offset: 0,
          limit: 1000
        }
      });
      const repliedMessage = data.messages.messageList.find(
        msg => msg.id === messageId
      );
      if (repliedMessage) {
        repliedMessage.replies.push(newReply);
      }
      store.writeQuery({ query: MESSAGE_QUERY, data });
      this.props.closeForm();
    };

    const { messageId } = this.props;

    return (
      <div className="reply-container">
        <textarea
          onChange={e => this.setState({ replyText: e.target.value })}
        />
        <div className="message-edit-buttons-container">
          <Mutation
            mutation={POST_REPLY_MUTATION}
            variables={{ messageId, replyText }}
            update={(store, { data: { postReply } }) => {
              _updateStoreAfterReply(store, postReply, messageId);
            }}
          >
            {postMutation => (
              <button onClick={() => ifNotEmpty(postMutation)}>Reply</button>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default ReplyForm;
