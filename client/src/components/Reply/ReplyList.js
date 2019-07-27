import React, { Component } from "react";
import ReplyItem from "./ReplyItem";
import ReplyForm from "./ReplyForm";

class ReplyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplyForm: false
    };

    this.closeForm = this.closeForm.bind(this);
  }

  closeForm() {
    this.setState(prevState => ({
      showReplyForm: !prevState.showReplyForm
    }));
  }
  render() {
    const { messageId, replies } = this.props;

    const toogleForm = () => {
      this.setState(prevState => ({
        showReplyForm: !prevState.showReplyForm
      }));
    };
    return (
      <div className="wrapper">
        <div className="replies-list">
          {replies.map(item => {
            return <ReplyItem key={item.id} {...item} />;
          })}
          <button className="replies-button" onClick={() => toogleForm()}>
            {this.state.showReplyForm ? "Cancel" : "Reply"}
          </button>
          {this.state.showReplyForm && (
            <ReplyForm
              messageId={messageId}
              closeForm={this.closeForm}
              orderBy={this.props.orderBy}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ReplyList;
