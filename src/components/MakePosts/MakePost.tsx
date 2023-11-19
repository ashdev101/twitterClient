'use client'

import { BiWorld } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { HiOutlineGif } from 'react-icons/hi2'
import { LuSettings2 } from 'react-icons/lu'
import { BiSmile } from 'react-icons/bi'
import { TbCalendarTime } from 'react-icons/tb'
import { CiLocationOn } from 'react-icons/ci'
import Avatar from '../Avatar/Avatar'
import { MouseEvent, MouseEventHandler, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { makeTweet } from '../../../ReactQueryQueries/getCurrentUser'


export type Post = {

    content: string,
    image?: string
}


type Props = {}

function MakePost({ }: Props) {

    const [post, SetPosts] = useState<Post>({
        content: "",
        image: undefined
    })


    const { mutate } = makeTweet()

    const handleMakeTweet = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        mutate(post)
    }


    return (
        <section id='setPost' className=' flex flex-row items-start gap-2 justify-between w-full border-[1px] border-black mt-3 p-3'>
            <div id='AvatarPosts'>
                <Avatar
                    name='A'
                />
            </div>
            <div className=' flex flex-col items-start justify-center gap-1 self-start w-full text-[rgb(142,205,247)]'>
                <input type="text" placeholder='What is happening?!' className=' w-full p-3 text-black outline-none' onChange={e => SetPosts({ ...post, content: e.target.value })} />
                <div className=' flex flex-row items-center justify-center gap-2'>
                    <BiWorld size={15} />
                    <span className=' text-sm font-bold'>Everyone can reply</span>
                </div>
                <div className=' flex flex-row items-center justify-between w-full'>
                    <section id='uploadMenu' className=' flex flex-row item-center justify-between gap-4'>
                        <div>
                            <CiImageOn size={18} />
                        </div>
                        <div>
                            <HiOutlineGif size={18} />
                        </div>
                        <div>
                            <LuSettings2 size={18} />
                        </div>
                        <div>
                            <BiSmile size={18} />
                        </div>
                        <div>
                            <TbCalendarTime size={18} />
                        </div>
                        <div>
                            <CiLocationOn size={18} />
                        </div>
                    </section>

                    <button className=' py-1 px-3 bg-[rgb(142,205,247)] text-white rounded-full ' onClick={handleMakeTweet} >Post</button>

                </div>
            </div>
            <div className=' '>

            </div>
        </section>
    )
}

export default MakePost