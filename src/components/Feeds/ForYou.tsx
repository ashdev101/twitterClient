import React from 'react'
import PostCard from '../PostCard/PostCard'

type Props = {}

function ForYou({ }: Props) {
    return (
        <section id='postFeeds' className=' flex flex-col items-center justify-center gap-3'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </section>
    )
}

export default ForYou