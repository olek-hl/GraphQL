import gql from "graphql-tag";

export const MESSAGE_QUERY = gql`
  query messageQuery(
    $orderBy: MessageOrderByInput
    $filter: String
    $offset: Int
    $limit: Int
  ) {
    messages(orderBy: $orderBy, filter: $filter, skip: $offset, first: $limit) {
      count
      messageList {
        id
        messageText
        likes
        dislikes
        replies {
          id
          replyText
        }
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation PostMutation($messageText: String!) {
    postMessage(messageText: $messageText) {
      id
      messageText
      likes
      dislikes
      replies {
        id
        replyText
      }
    }
  }
`;

export const POST_REPLY_MUTATION = gql`
  mutation PostMutation($messageId: ID!, $replyText: String!) {
    postReply(messageId: $messageId, replyText: $replyText) {
      id
      replyText
    }
  }
`;

export const UPDATE_LIKES_MUTATION = gql`
  mutation PostMutation($id: ID!) {
    updateLikes(id: $id) {
      id
      messageText
      likes
      dislikes
      replies {
        id
        replyText
      }
    }
  }
`;

export const UPDATE_DISLIKES_MUTATION = gql`
  mutation PostMutation($id: ID!) {
    updateDislikes(id: $id) {
      id
      messageText
      likes
      dislikes
      replies {
        id
        replyText
      }
    }
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      id
      messageText
      likes
      dislikes
      replies {
        id
        replyText
      }
    }
  }
`;

export const NEW_REACTIONS_SUBSCRIPTION = gql`
  subscription {
    newReaction {
      id
      messageText
      likes
      dislikes
      replies {
        id
        replyText
      }
    }
  }
`;
