import { useMutation } from "@tanstack/react-query";
import { graphqlClient } from "../clients/graphqlClient";
import { FollowMutation, UnfollowMutation } from "../graphql/mutations/FollowUnfollow";

type followProps = {
    from: string
    to: string
}


export const FollowMutationFn = () => {
    const mutation = useMutation({
        mutationFn: async ({ from, to }: followProps) => {
            return await graphqlClient.request(FollowMutation, { from, to })
        }
    })

    return mutation
}

export const unfollowMutationFn = () => {
    const mutation = useMutation({
        mutationFn: async ({ from, to }: followProps) => {
            return await graphqlClient.request(UnfollowMutation, { from, to })
        }
    })

    return mutation
}

