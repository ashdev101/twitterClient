
import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";
console.log(isClient)


export const graphqlClient = new GraphQLClient("http://localhost:4000/graphql", {
    headers: {
        authorization: isClient ? `Bearer ${window.localStorage.getItem("__token_test")}` : ""
    }
})

//doing so beacuse of unepexted error thrown while sending the headers while verifying the token 
export const graphqlClientForTokenVerification = new GraphQLClient("http://localhost:4000/graphql")