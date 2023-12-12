import { useQuery } from "@tanstack/react-query"
import { graphqlClient } from "../clients/graphqlClient"
import { getAllTweetsQuery, getAllTweetsQueryofUser } from "../graphql/query/tweets"


export const getAllTweetsOfUserFn = () => {
    const query = useQuery({
        queryKey: ['query-user'],
        queryFn: async () => {
            return await graphqlClient.request(getAllTweetsQueryofUser)
        }
    })

    return query
}

type getAllTweetsProps = {
    skip?: number 
    take?: number 
}

export const getAllTweets = ( skip? : number, take?: number) => {
    const query = useQuery({
        queryKey: ["all-tweets"],
        queryFn: async () => {
            return await graphqlClient.request(getAllTweetsQuery, { skip, take })
        }
    })
    return query
}