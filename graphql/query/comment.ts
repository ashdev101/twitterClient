import { graphql } from "@/gql";


export const getAllCommentsByTweetId = graphql(/*GraphQL*/`

    query getAllCommentsByTweetIdQuery($tweetId: String!) {
        getAllCommentsByTweetId(tweetId: $tweetId) {
          id
          tweetId
          comment
          
          commenter {
            id
            firstName
          }

          tweet {
            content
            image
          }

          createdAt
          updatedAt
          
        }
      }
  
  
  

`)