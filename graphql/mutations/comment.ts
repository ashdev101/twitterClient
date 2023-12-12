import { graphql } from "@/gql";


export const MakeCommentMutation = graphql(/*GraphQL*/`

mutation Mutation($comment: String!, $tweetId: String!) {
  makeCommment(comment: $comment, tweetId: $tweetId) {
    comment
    commenter {
      id
      firstName
    }
    createdAt
  }
}
  
`)