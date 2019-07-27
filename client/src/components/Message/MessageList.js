import { Component } from "react";
import React from "react";
import { Query } from "react-apollo";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import {
  MESSAGE_QUERY,
  NEW_MESSAGES_SUBSCRIPTION,
  NEW_REACTIONS_SUBSCRIPTION
} from "../../queries";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "likes_ASC",
      filter: ""
    };
  }

  render() {
    const _subscribeToNewMessages = subscribeToMore => {
      subscribeToMore({
        document: NEW_MESSAGES_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const { newMessage } = subscriptionData.data;
          const exists = prev.messages.messageList.find(
            ({ id }) => id === newMessage.id
          );
          if (exists) return prev;

          return {
            ...prev,
            messages: {
              messageList: [newMessage, ...prev.messages.messageList],
              count: prev.messages.messageList.length + 1,
              __typename: prev.messages.__typename
            }
          };
        }
      });
    };
    const _subscribeToNewReactions = subscribeToMore => {
      subscribeToMore({
        document: NEW_REACTIONS_SUBSCRIPTION
      });
    };
    return (
      <div className="chat">
        <div className="sort-container">
          <span>Sort by</span>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_createdAt_DESC"
              value="createdAt_DESC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_createdAt_DESC">createdAt_DESC</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_createdAt_ASC"
              value="createdAt_ASC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_createdAt_ASC">createdAt_ASC</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_likes_DESC"
              value="likes_DESC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_likes_DESC">likes_DESC</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_likes_ASC"
              value="likes_ASC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_likes_ASC">likes_ASC</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_dislikes_DESC"
              value="dislikes_DESC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_dislikes_DESC">dislikes_DESC</label>
          </div>
          <div>
            <input
              type="radio"
              name="sortBy"
              id="sortBy_dislikes_ASC"
              value="dislikes_ASC"
              onChange={e => this.setState({ orderBy: e.target.value })}
            />
            <label htmlFor="sortBy_dislikes_ASC">dislikes_ASC</label>
          </div>
        </div>
        <div className="filter-container">
          Search:{" "}
          <input
            placeholder="Search"
            value={this.state.filter}
            onChange={e => this.setState({ filter: e.target.value })}
          />
        </div>
        <div className="messages">
          <Query
            query={MESSAGE_QUERY}
            variables={{
              orderBy: this.state.orderBy,
              filter: this.state.filter,
              offset: 0,
              limit: 1000
            }}
            fetchPolicy="cache-and-network"
          >
            {({ loading, error, data, subscribeToMore, fetchMore }) => {
              if (loading) return <p className="loader" />;
              if (error) return <div>Error</div>;

              _subscribeToNewMessages(subscribeToMore);
              _subscribeToNewReactions(subscribeToMore);

              const {
                messages: { messageList }
              } = data;

              return (
                <div>
                  {messageList.map(item => {
                    return (
                      <MessageItem
                        key={item.id}
                        {...item}
                        orderBy={this.state.orderBy}
                      />
                    );
                  })}
                </div>
              );
            }}
          </Query>
        </div>
        <MessageInput />
      </div>
    );
  }
}

export default MessageList;
