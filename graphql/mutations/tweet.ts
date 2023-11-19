import { graphql } from "@/gql";



export const makeTweetMutation = graphql(/*GraphQL*/`

mutation makeTweet($content: String!, $image: String){
    makeTweet(content: $content , image: $image) {
      content ,
      image ,
      id,
    }
  }

`)