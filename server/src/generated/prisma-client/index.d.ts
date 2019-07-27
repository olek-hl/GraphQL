// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  message: (where?: MessageWhereInput) => Promise<boolean>;
  reply: (where?: ReplyWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  message: (where: MessageWhereUniqueInput) => MessageNullablePromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  reply: (where: ReplyWhereUniqueInput) => ReplyNullablePromise;
  replies: (args?: {
    where?: ReplyWhereInput;
    orderBy?: ReplyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Reply>;
  repliesConnection: (args?: {
    where?: ReplyWhereInput;
    orderBy?: ReplyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ReplyConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (args: {
    data: MessageUpdateInput;
    where: MessageWhereUniqueInput;
  }) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  upsertMessage: (args: {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  }) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
  createReply: (data: ReplyCreateInput) => ReplyPromise;
  updateReply: (args: {
    data: ReplyUpdateInput;
    where: ReplyWhereUniqueInput;
  }) => ReplyPromise;
  updateManyReplies: (args: {
    data: ReplyUpdateManyMutationInput;
    where?: ReplyWhereInput;
  }) => BatchPayloadPromise;
  upsertReply: (args: {
    where: ReplyWhereUniqueInput;
    create: ReplyCreateInput;
    update: ReplyUpdateInput;
  }) => ReplyPromise;
  deleteReply: (where: ReplyWhereUniqueInput) => ReplyPromise;
  deleteManyReplies: (where?: ReplyWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  reply: (
    where?: ReplySubscriptionWhereInput
  ) => ReplySubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ReplyOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "replyText_ASC"
  | "replyText_DESC";

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "messageText_ASC"
  | "messageText_DESC"
  | "likes_ASC"
  | "likes_DESC"
  | "dislikes_ASC"
  | "dislikes_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ReplyUpdateManyWithoutMessageInput {
  create?: Maybe<
    ReplyCreateWithoutMessageInput[] | ReplyCreateWithoutMessageInput
  >;
  delete?: Maybe<ReplyWhereUniqueInput[] | ReplyWhereUniqueInput>;
  connect?: Maybe<ReplyWhereUniqueInput[] | ReplyWhereUniqueInput>;
  set?: Maybe<ReplyWhereUniqueInput[] | ReplyWhereUniqueInput>;
  disconnect?: Maybe<ReplyWhereUniqueInput[] | ReplyWhereUniqueInput>;
  update?: Maybe<
    | ReplyUpdateWithWhereUniqueWithoutMessageInput[]
    | ReplyUpdateWithWhereUniqueWithoutMessageInput
  >;
  upsert?: Maybe<
    | ReplyUpsertWithWhereUniqueWithoutMessageInput[]
    | ReplyUpsertWithWhereUniqueWithoutMessageInput
  >;
  deleteMany?: Maybe<ReplyScalarWhereInput[] | ReplyScalarWhereInput>;
  updateMany?: Maybe<
    ReplyUpdateManyWithWhereNestedInput[] | ReplyUpdateManyWithWhereNestedInput
  >;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ReplyCreateInput {
  id?: Maybe<ID_Input>;
  replyText: String;
  message: MessageCreateOneWithoutRepliesInput;
}

export interface ReplyUpdateManyWithWhereNestedInput {
  where: ReplyScalarWhereInput;
  data: ReplyUpdateManyDataInput;
}

export interface MessageUpdateManyMutationInput {
  messageText?: Maybe<String>;
  likes?: Maybe<Int>;
  dislikes?: Maybe<Int>;
}

export interface ReplyUpdateWithoutMessageDataInput {
  replyText?: Maybe<String>;
}

export interface ReplySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ReplyWhereInput>;
  AND?: Maybe<ReplySubscriptionWhereInput[] | ReplySubscriptionWhereInput>;
  OR?: Maybe<ReplySubscriptionWhereInput[] | ReplySubscriptionWhereInput>;
  NOT?: Maybe<ReplySubscriptionWhereInput[] | ReplySubscriptionWhereInput>;
}

export interface ReplyUpdateManyMutationInput {
  replyText?: Maybe<String>;
}

export interface MessageCreateInput {
  id?: Maybe<ID_Input>;
  messageText: String;
  likes?: Maybe<Int>;
  dislikes?: Maybe<Int>;
  replies?: Maybe<ReplyCreateManyWithoutMessageInput>;
}

export interface MessageUpdateWithoutRepliesDataInput {
  messageText?: Maybe<String>;
  likes?: Maybe<Int>;
  dislikes?: Maybe<Int>;
}

export interface ReplyCreateManyWithoutMessageInput {
  create?: Maybe<
    ReplyCreateWithoutMessageInput[] | ReplyCreateWithoutMessageInput
  >;
  connect?: Maybe<ReplyWhereUniqueInput[] | ReplyWhereUniqueInput>;
}

export interface ReplyUpdateInput {
  replyText?: Maybe<String>;
  message?: Maybe<MessageUpdateOneRequiredWithoutRepliesInput>;
}

export interface ReplyCreateWithoutMessageInput {
  id?: Maybe<ID_Input>;
  replyText: String;
}

export type ReplyWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MessageUpdateInput {
  messageText?: Maybe<String>;
  likes?: Maybe<Int>;
  dislikes?: Maybe<Int>;
  replies?: Maybe<ReplyUpdateManyWithoutMessageInput>;
}

export interface MessageWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  messageText?: Maybe<String>;
  messageText_not?: Maybe<String>;
  messageText_in?: Maybe<String[] | String>;
  messageText_not_in?: Maybe<String[] | String>;
  messageText_lt?: Maybe<String>;
  messageText_lte?: Maybe<String>;
  messageText_gt?: Maybe<String>;
  messageText_gte?: Maybe<String>;
  messageText_contains?: Maybe<String>;
  messageText_not_contains?: Maybe<String>;
  messageText_starts_with?: Maybe<String>;
  messageText_not_starts_with?: Maybe<String>;
  messageText_ends_with?: Maybe<String>;
  messageText_not_ends_with?: Maybe<String>;
  likes?: Maybe<Int>;
  likes_not?: Maybe<Int>;
  likes_in?: Maybe<Int[] | Int>;
  likes_not_in?: Maybe<Int[] | Int>;
  likes_lt?: Maybe<Int>;
  likes_lte?: Maybe<Int>;
  likes_gt?: Maybe<Int>;
  likes_gte?: Maybe<Int>;
  dislikes?: Maybe<Int>;
  dislikes_not?: Maybe<Int>;
  dislikes_in?: Maybe<Int[] | Int>;
  dislikes_not_in?: Maybe<Int[] | Int>;
  dislikes_lt?: Maybe<Int>;
  dislikes_lte?: Maybe<Int>;
  dislikes_gt?: Maybe<Int>;
  dislikes_gte?: Maybe<Int>;
  replies_every?: Maybe<ReplyWhereInput>;
  replies_some?: Maybe<ReplyWhereInput>;
  replies_none?: Maybe<ReplyWhereInput>;
  AND?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  OR?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  NOT?: Maybe<MessageWhereInput[] | MessageWhereInput>;
}

export interface ReplyUpdateManyDataInput {
  replyText?: Maybe<String>;
}

export interface MessageUpsertWithoutRepliesInput {
  update: MessageUpdateWithoutRepliesDataInput;
  create: MessageCreateWithoutRepliesInput;
}

export interface ReplyScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  replyText?: Maybe<String>;
  replyText_not?: Maybe<String>;
  replyText_in?: Maybe<String[] | String>;
  replyText_not_in?: Maybe<String[] | String>;
  replyText_lt?: Maybe<String>;
  replyText_lte?: Maybe<String>;
  replyText_gt?: Maybe<String>;
  replyText_gte?: Maybe<String>;
  replyText_contains?: Maybe<String>;
  replyText_not_contains?: Maybe<String>;
  replyText_starts_with?: Maybe<String>;
  replyText_not_starts_with?: Maybe<String>;
  replyText_ends_with?: Maybe<String>;
  replyText_not_ends_with?: Maybe<String>;
  AND?: Maybe<ReplyScalarWhereInput[] | ReplyScalarWhereInput>;
  OR?: Maybe<ReplyScalarWhereInput[] | ReplyScalarWhereInput>;
  NOT?: Maybe<ReplyScalarWhereInput[] | ReplyScalarWhereInput>;
}

export interface ReplyUpsertWithWhereUniqueWithoutMessageInput {
  where: ReplyWhereUniqueInput;
  update: ReplyUpdateWithoutMessageDataInput;
  create: ReplyCreateWithoutMessageInput;
}

export interface ReplyWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  replyText?: Maybe<String>;
  replyText_not?: Maybe<String>;
  replyText_in?: Maybe<String[] | String>;
  replyText_not_in?: Maybe<String[] | String>;
  replyText_lt?: Maybe<String>;
  replyText_lte?: Maybe<String>;
  replyText_gt?: Maybe<String>;
  replyText_gte?: Maybe<String>;
  replyText_contains?: Maybe<String>;
  replyText_not_contains?: Maybe<String>;
  replyText_starts_with?: Maybe<String>;
  replyText_not_starts_with?: Maybe<String>;
  replyText_ends_with?: Maybe<String>;
  replyText_not_ends_with?: Maybe<String>;
  message?: Maybe<MessageWhereInput>;
  AND?: Maybe<ReplyWhereInput[] | ReplyWhereInput>;
  OR?: Maybe<ReplyWhereInput[] | ReplyWhereInput>;
  NOT?: Maybe<ReplyWhereInput[] | ReplyWhereInput>;
}

export interface ReplyUpdateWithWhereUniqueWithoutMessageInput {
  where: ReplyWhereUniqueInput;
  data: ReplyUpdateWithoutMessageDataInput;
}

export interface MessageUpdateOneRequiredWithoutRepliesInput {
  create?: Maybe<MessageCreateWithoutRepliesInput>;
  update?: Maybe<MessageUpdateWithoutRepliesDataInput>;
  upsert?: Maybe<MessageUpsertWithoutRepliesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MessageWhereInput>;
  AND?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  OR?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  NOT?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
}

export interface MessageCreateOneWithoutRepliesInput {
  create?: Maybe<MessageCreateWithoutRepliesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
}

export interface MessageCreateWithoutRepliesInput {
  id?: Maybe<ID_Input>;
  messageText: String;
  likes?: Maybe<Int>;
  dislikes?: Maybe<Int>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ReplyPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  replyText: String;
}

export interface ReplyPreviousValuesPromise
  extends Promise<ReplyPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  replyText: () => Promise<String>;
}

export interface ReplyPreviousValuesSubscription
  extends Promise<AsyncIterator<ReplyPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  replyText: () => Promise<AsyncIterator<String>>;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Message {
  id: ID_Output;
  createdAt: DateTimeOutput;
  messageText: String;
  likes: Int;
  dislikes: Int;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  messageText: () => Promise<String>;
  likes: () => Promise<Int>;
  dislikes: () => Promise<Int>;
  replies: <T = FragmentableArray<Reply>>(args?: {
    where?: ReplyWhereInput;
    orderBy?: ReplyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  messageText: () => Promise<AsyncIterator<String>>;
  likes: () => Promise<AsyncIterator<Int>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
  replies: <T = Promise<AsyncIterator<ReplySubscription>>>(args?: {
    where?: ReplyWhereInput;
    orderBy?: ReplyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessageNullablePromise
  extends Promise<Message | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  messageText: () => Promise<String>;
  likes: () => Promise<Int>;
  dislikes: () => Promise<Int>;
  replies: <T = FragmentableArray<Reply>>(args?: {
    where?: ReplyWhereInput;
    orderBy?: ReplyOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessagePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  messageText: String;
  likes: Int;
  dislikes: Int;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  messageText: () => Promise<String>;
  likes: () => Promise<Int>;
  dislikes: () => Promise<Int>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  messageText: () => Promise<AsyncIterator<String>>;
  likes: () => Promise<AsyncIterator<Int>>;
  dislikes: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ReplySubscriptionPayload {
  mutation: MutationType;
  node: Reply;
  updatedFields: String[];
  previousValues: ReplyPreviousValues;
}

export interface ReplySubscriptionPayloadPromise
  extends Promise<ReplySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ReplyPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReplyPreviousValuesPromise>() => T;
}

export interface ReplySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReplySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReplySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReplyPreviousValuesSubscription>() => T;
}

export interface Reply {
  id: ID_Output;
  createdAt: DateTimeOutput;
  replyText: String;
}

export interface ReplyPromise extends Promise<Reply>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  replyText: () => Promise<String>;
  message: <T = MessagePromise>() => T;
}

export interface ReplySubscription
  extends Promise<AsyncIterator<Reply>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  replyText: () => Promise<AsyncIterator<String>>;
  message: <T = MessageSubscription>() => T;
}

export interface ReplyNullablePromise
  extends Promise<Reply | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  replyText: () => Promise<String>;
  message: <T = MessagePromise>() => T;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface AggregateReply {
  count: Int;
}

export interface AggregateReplyPromise
  extends Promise<AggregateReply>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReplySubscription
  extends Promise<AsyncIterator<AggregateReply>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ReplyEdge {
  node: Reply;
  cursor: String;
}

export interface ReplyEdgePromise extends Promise<ReplyEdge>, Fragmentable {
  node: <T = ReplyPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReplyEdgeSubscription
  extends Promise<AsyncIterator<ReplyEdge>>,
    Fragmentable {
  node: <T = ReplySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ReplyConnection {
  pageInfo: PageInfo;
  edges: ReplyEdge[];
}

export interface ReplyConnectionPromise
  extends Promise<ReplyConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ReplyEdge>>() => T;
  aggregate: <T = AggregateReplyPromise>() => T;
}

export interface ReplyConnectionSubscription
  extends Promise<AsyncIterator<ReplyConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReplyEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReplySubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Reply",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
