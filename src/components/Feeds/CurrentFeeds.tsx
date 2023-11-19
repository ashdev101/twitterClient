import React from 'react'
import PostCard from '../PostCard/PostCard'
import ForYou from './ForYou'
import FollowingFeeds from './FollowingFeeds'

type Props = {
    currentSelection: string
}

function CurrentFeeds({ currentSelection }: Props): React.ReactNode {
    

    if (currentSelection === "1") {
        console.log(true)
        return <ForYou />
    }
    else {
        return <FollowingFeeds />
    }
}

export default CurrentFeeds