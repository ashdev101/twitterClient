import { graphql } from "@/gql";

export const FollowMutation = graphql(/*GraphQL*/`

mutation followMutation($from: String!, $to: String!) {
    follow(from: $from, to: $to)
  }
  
`)


export const UnfollowMutation = graphql(/*GraphQl*/`

mutation unfollowMutation($from: String!, $to: String!) {
    unfollow(from: $from, to: $to)
  }
`)


