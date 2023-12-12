/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\nmutation followMutation($from: String!, $to: String!) {\n    follow(from: $from, to: $to)\n  }\n  \n": types.FollowMutationDocument,
    "\n\nmutation unfollowMutation($from: String!, $to: String!) {\n    unfollow(from: $from, to: $to)\n  }\n": types.UnfollowMutationDocument,
    "\n\nmutation Mutation($comment: String!, $tweetId: String!) {\n  makeCommment(comment: $comment, tweetId: $tweetId) {\n    comment\n    commenter {\n      id\n      firstName\n    }\n    createdAt\n  }\n}\n  \n": types.MutationDocument,
    "\n\nmutation makeTweet($content: String!, $image: String){\n    makeTweet(content: $content , image: $image) {\n      content ,\n      image ,\n      id,\n    }\n  }\n\n": types.MakeTweetDocument,
    "\n\n    query getAllCommentsByTweetIdQuery($tweetId: String!) {\n        getAllCommentsByTweetId(tweetId: $tweetId) {\n          id\n          tweetId\n          comment\n          \n          commenter {\n            id\n            firstName\n          }\n\n          tweet {\n            content\n            image\n          }\n\n          createdAt\n          updatedAt\n          \n        }\n      }\n  \n  \n  \n\n": types.GetAllCommentsByTweetIdQueryDocument,
    "\nquery getAllTweetsQuery($skip: Int, $take: Int)  {\n    getAllTweets(skip: $skip, take: $take) {\n      id\n      content\n      image\n      author {\n        id\n        email\n        firstName\n        profileImgURL\n      }\n      createdAt\n      updatedAt\n    }\n  }\n\n": types.GetAllTweetsQueryDocument,
    "\nquery Query {\n    getAllTweetsofUser {\n      content\n      image\n      comments {\n        comment\n        createdAt\n        updatedAt\n      }\n    }\n  }\n  \n": types.QueryDocument,
    "\n  query verifyGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n  \n": types.VerifyGoogleTokenQueryDocument,
    "\nquery getuser {\n  getCurrentUser {\n    id\n    lastName\n    firstName\n    email\n    profileImgURL\n  }\n}\n\n": types.GetuserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation followMutation($from: String!, $to: String!) {\n    follow(from: $from, to: $to)\n  }\n  \n"): (typeof documents)["\n\nmutation followMutation($from: String!, $to: String!) {\n    follow(from: $from, to: $to)\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation unfollowMutation($from: String!, $to: String!) {\n    unfollow(from: $from, to: $to)\n  }\n"): (typeof documents)["\n\nmutation unfollowMutation($from: String!, $to: String!) {\n    unfollow(from: $from, to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation Mutation($comment: String!, $tweetId: String!) {\n  makeCommment(comment: $comment, tweetId: $tweetId) {\n    comment\n    commenter {\n      id\n      firstName\n    }\n    createdAt\n  }\n}\n  \n"): (typeof documents)["\n\nmutation Mutation($comment: String!, $tweetId: String!) {\n  makeCommment(comment: $comment, tweetId: $tweetId) {\n    comment\n    commenter {\n      id\n      firstName\n    }\n    createdAt\n  }\n}\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation makeTweet($content: String!, $image: String){\n    makeTweet(content: $content , image: $image) {\n      content ,\n      image ,\n      id,\n    }\n  }\n\n"): (typeof documents)["\n\nmutation makeTweet($content: String!, $image: String){\n    makeTweet(content: $content , image: $image) {\n      content ,\n      image ,\n      id,\n    }\n  }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\n    query getAllCommentsByTweetIdQuery($tweetId: String!) {\n        getAllCommentsByTweetId(tweetId: $tweetId) {\n          id\n          tweetId\n          comment\n          \n          commenter {\n            id\n            firstName\n          }\n\n          tweet {\n            content\n            image\n          }\n\n          createdAt\n          updatedAt\n          \n        }\n      }\n  \n  \n  \n\n"): (typeof documents)["\n\n    query getAllCommentsByTweetIdQuery($tweetId: String!) {\n        getAllCommentsByTweetId(tweetId: $tweetId) {\n          id\n          tweetId\n          comment\n          \n          commenter {\n            id\n            firstName\n          }\n\n          tweet {\n            content\n            image\n          }\n\n          createdAt\n          updatedAt\n          \n        }\n      }\n  \n  \n  \n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getAllTweetsQuery($skip: Int, $take: Int)  {\n    getAllTweets(skip: $skip, take: $take) {\n      id\n      content\n      image\n      author {\n        id\n        email\n        firstName\n        profileImgURL\n      }\n      createdAt\n      updatedAt\n    }\n  }\n\n"): (typeof documents)["\nquery getAllTweetsQuery($skip: Int, $take: Int)  {\n    getAllTweets(skip: $skip, take: $take) {\n      id\n      content\n      image\n      author {\n        id\n        email\n        firstName\n        profileImgURL\n      }\n      createdAt\n      updatedAt\n    }\n  }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Query {\n    getAllTweetsofUser {\n      content\n      image\n      comments {\n        comment\n        createdAt\n        updatedAt\n      }\n    }\n  }\n  \n"): (typeof documents)["\nquery Query {\n    getAllTweetsofUser {\n      content\n      image\n      comments {\n        comment\n        createdAt\n        updatedAt\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query verifyGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n  \n"): (typeof documents)["\n  query verifyGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getuser {\n  getCurrentUser {\n    id\n    lastName\n    firstName\n    email\n    profileImgURL\n  }\n}\n\n"): (typeof documents)["\nquery getuser {\n  getCurrentUser {\n    id\n    lastName\n    firstName\n    email\n    profileImgURL\n  }\n}\n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;