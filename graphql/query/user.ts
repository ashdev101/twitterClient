import { graphql } from '@/gql/gql'

export const verifyUserGoogleTokenQuery = graphql(`
  query verifyGoogleTokenQuery($token: String!) {
    verifyGoogleToken(token: $token)
  }
  
`);


export const getCurrentUserQuery = graphql(`
query getuser {
  getCurrentUser {
    id
    lastName
    firstName
    email
    profileImgURL
  }
}

`)
