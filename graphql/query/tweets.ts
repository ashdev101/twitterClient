import { graphql } from "@/gql";


export const getAllTweetsQuery = graphql(/*GrapgQL*/`
query getAllTweetsQuery($skip: Int, $take: Int)  {
    getAllTweets(skip: $skip, take: $take) {
      id
      content
      image
      author {
        id
        email
        firstName
        profileImgURL
      }
      createdAt
      updatedAt
    }
  }

`)

export const getAllTweetsQueryofUser = graphql(/*GraphQL*/`
query Query {
    getAllTweetsofUser {
      content
      image
      comments {
        comment
        createdAt
        updatedAt
      }
    }
  }
  
`)