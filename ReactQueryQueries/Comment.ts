import { useMutation } from "@tanstack/react-query"
import { graphqlClient } from "../clients/graphqlClient"
import { MakeCommentMutation } from "../graphql/mutations/comment"
import { getAllCommentsByTweetId } from "../graphql/query/comment";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { CloseCommentModal } from "../Features/CommentModalSlice";

type makeCommentProp = {

    comment: string;
    tweetId: string;

}

type getCommnetProp = {
    tweetId : string
}

export const makeCommentfn = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: async ({ comment, tweetId }: makeCommentProp) => {
            graphqlClient.request(MakeCommentMutation, { comment, tweetId })
        },
        onSuccess : ()=>{
            toast.success("commented")
            dispatch(CloseCommentModal())
        },
        onError : () =>{
            toast.error("oops something went wrong ")
        }
    })

    return mutation 

}

export const getAllCommentsByTweetIdFn = ()=>{
    const mutation = useMutation({
        mutationFn : async({tweetId}:getCommnetProp)=>{
             graphqlClient.request(getAllCommentsByTweetId , {tweetId})
        }
    })
}