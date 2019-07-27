import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { POST_MESSAGE_MUTATION } from "../../queries";

class MessageInput extends Component {
  state = { messageText: "" };
  render() {
    let messageText = this.state.messageText;
    const ifNotEmpty = mutation => {
      if (messageText.trim().length > 0) mutation(messageText);
    };
    return (
      <div className="message-input">
        <div className="wrapper">
          <input
            type="text"
            placeholder="Enter your message here..."
            value={this.state.messageText}
            onChange={e => this.setState({ messageText: e.target.value })}
          />
          <Mutation
            mutation={POST_MESSAGE_MUTATION}
            variables={{ messageText }}
            onCompleted={() => this.setState({ messageText: "" })}
          >
            {postMutation => (
              <button
                className="submit"
                onClick={() => ifNotEmpty(postMutation)}
              >
                Send
              </button>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default MessageInput;
