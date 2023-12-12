
import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";
console.log(isClient)


const authorization = isClient ? `Bearer ${window.localStorage.getItem("__token_test")}` : ""
// console.log(window.localStorage.getItem("__token_test"))
// console.log(authorization)

export const graphqlClient = new GraphQLClient("https://twitterserver.onrender.com/graphql", {
    headers: () => ({
        Authorization: isClient
            ? `Bearer ${window.localStorage.getItem("__token_test")}`
            : "",
    })
})

//doing so beacuse of unepexted error thrown while sending the headers while verifying the token 
export const graphqlClientForTokenVerification = new GraphQLClient("https://twitterserver.onrender.com/graphql")