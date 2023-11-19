import {
    useMutation,
    useQuery
} from '@tanstack/react-query'
import { graphqlClient } from '../clients/graphqlClient'
import { getCurrentUserQuery } from '../graphql/query/user'
import { makeTweetMutation } from '../graphql/mutations/tweet'
import { Post } from '@/components/MakePosts/MakePost'
import toast from 'react-hot-toast'


export const getUser = () => {

    const query = useQuery({
        queryKey: ["current-user"],
        queryFn: async () => {
            return await graphqlClient.request(getCurrentUserQuery)
        }
    })

    return { user: query.data?.getCurrentUser }

}


export const makeTweet = () => {

    const mutation = useMutation({
        mutationFn: async ({ content, image }: Post) => {
            return await graphqlClient.request(makeTweetMutation, { content, image })
        },
        onSuccess : ()=>{
            toast.success("tweet added succesfully")
        },
        onError : (error)=>{
            console.log(error.message.split(":")[1])
            toast.error(error.message.split(":")[1])
        }
    })

    return mutation
}