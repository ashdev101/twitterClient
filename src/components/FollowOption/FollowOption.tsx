import React from 'react'

type Props = {

    avatar: string
    name: string
    twitterHandler: string
    // onClick  : string
}

function FollowOption({
    avatar,
    name,
    twitterHandler
}: Props) {
    return (
        <div id='follow card' className=' flex flex-row items-center justify-between w-full ' >
            <div id='User' className=' flex flex-row items-center justify-center gap-2'>

                <div id='avatarFollow'>
                    <div className=' h-[40px] w-[40px] p-2 rounded-full border-[1px] flex items-center justify-center'>
                        {avatar}
                    </div>
                </div>

                <div className=' flex flex-col items-center justify-center '>
                    <section className=' text-md font-bold'>
                        {name}
                    </section>
                    <section className=' text-md '>
                        {twitterHandler}
                    </section>
                </div>

            </div>

            <button id='FollowButton' className=' px-3 py-1 bg-black text-white rounded-full'>
                Follow
            </button>
        </div>
    )
}

export default FollowOption