'use client'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import IconsWithLabel from '../IconsWithLabel/IconsWithLabel';
import Button from '../Buttons/Button';
import Avatar from '../Avatar/Avatar';
import { SlOptions } from 'react-icons/sl';
import { getUser } from '../../../ReactQueryQueries/getCurrentUser';
import { HiOutlineGif } from 'react-icons/hi2';
import { LuSettings2 } from 'react-icons/lu';
import { BiSmile } from 'react-icons/bi';
import { TbCalendarTime } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Features/Store/Store'
import { OpenGifModal } from '../../../Features/GifModalSlice';
import { CloseEmojiSelector, OpenEmojiSelector } from '../../../Features/EmojiSlectorSlice';
import { makeCommentfn } from '../../../ReactQueryQueries/Comment';
import { RouteType } from 'next/dist/lib/load-custom-routes';
import { CloseCommentModal } from '../../../Features/CommentModalSlice';



type Props = {
    profileImageUrl: string | null | undefined
    name: string | null | undefined
    createdAt: string | null | undefined
    tweetId : string | null | undefined
    postDescription  : string | null | undefined
}

function BaseModalForComments({ profileImageUrl, name, createdAt ,tweetId , postDescription }: Props) {
    const isOpen = useSelector((state : RootState)=> state.CommentModal.isOpen)
    // console.log(tweetId)
    const dispatch = useDispatch()
    const [isEmojiOpen, setisEmojiOpen] = useState(false)
    // console.log(isEmojiOpen)
    const { user } = getUser()
    const [Post, setPost] = useState("")

    const {mutate , isError  } = makeCommentfn()

    const handleMakeComment = () =>{
        const comment = Post
        if(tweetId){
            mutate({comment  , tweetId })
        }
    }

    const isPostButtonDisabled = Post.length < 1
    // const isSameperson = 
    
    return (
        <>
            {isOpen &&
                <main className=' w-screen h-screen bg-neutral-300 flex flex-col items-center justify-between fixed top-0 right-0 left-0 z-50'>
                    <div className=' w-full md:w-[500px]  h-screen md:h-[450px] p-3 flex flex-col items-center justify-center gap-2 bg-white md:rounded-md' onClick={() => setisEmojiOpen(false)}>
                        <section id='topHeader' className=' w-full flex flex-row items-center justify-between px-2 py-1 border-b-2'>
                            <IconsWithLabel
                                Icon={<IoMdClose size={20} />}
                                onClick={() => {dispatch(CloseCommentModal())}}
                            />
                            <button className=' max-w-max p-3 outline-none border-none rounded-xl'>
                                Drafts
                            </button>
                        </section>
                        <section id='center' className=' w-full max-h-max flex flex-col items-center justify-center gap-10'>
                            <div className="w-full  flex flex-col items-center justify-center gap-10">
                                <div className=' flex flex-row items-center justify-center gap-3 w-full'>
                                    <Avatar
                                        profileImageUrl={profileImageUrl}
                                    />
                                    <section id='profileDetails' className=' flex flex-row items-center justify-between gap-2  w-full relative z-10'>
                                        <div className=' flex flex-row items-center justify-center gap-2'>
                                            <div id=' name' className='font-bold text-md '>
                                                {name}
                                            </div>
                                            <div id='Profile handler' className=' text-md text-neutral-300 '>
                                                @{name}
                                            </div>
                                            <div id='timestamp' className=' text-sm ' >
                                                {createdAt} ago
                                            </div>
                                        </div>
                                        <div className=' p-2 rounded-full hover:bg-blue-100' onClick={() => { }}>
                                            <SlOptions />
                                        </div>

                                    </section>
                                </div>

                                <div className=' w-full '>
                                    <p className=' text-sm'>{postDescription}</p>
                                    <section className=' text-lg' >Replying to @{name}</section>
                                </div>

                                <div className=' flex flex-row items-center justify-center gap-2 w-full'>
                                    <Avatar
                                        profileImageUrl={user?.profileImgURL}

                                    />

                                    {/* {
                                        isSameperson 
                                        ? 
                                        :<input type="text"   placeholder='You cant Comment on you Tweet' className=' w-full p-3 ' />

                                    } */}
                                    <input type="text" value={Post}  placeholder='Post your reply' className=' w-full p-3 ' onChange={(e) => setPost(e.target.value)} />


                                </div>
                                <section id='uploadMenu' className=' w-full flex flex-row item-center justify-between'>


                                    <div  onClick={() => dispatch(OpenGifModal())}>
                                        <HiOutlineGif size={18} />
                                    </div>
                                    <div>
                                        <LuSettings2 size={18} />
                                    </div>

                                    <div onClick={(e) => { e.stopPropagation();setisEmojiOpen(true)}}>
                                        <BiSmile size={18} />
                                    </div>

                                    <div>
                                        <TbCalendarTime size={18} />
                                    </div>
                                    <div>
                                        <CiLocationOn size={18} />
                                    </div>

                                    <button className=' max-w-max py-1 px-4 bg-[rgb(142,205,247)] outline-none border-none rounded-md' disabled={isPostButtonDisabled} onClick={handleMakeComment}>
                                        Post
                                    </button>
                                </section>

                                {
                                    isEmojiOpen &&
                                    <div
                                        className="absolute flex items-end justify-center w-full h-full" onClick={() => setisEmojiOpen(false)} >
                                        {/* className={` absolute ${SelectedGif ? "top-[-30rem] left-[-105px]" :"top-[2rem] left-[-150px] sm:top-0 sm:left-auto sm:right-auto" }  ' onClick={ e=>e.stopPropagation()}`}> */}
                                        <div
                                            onClick={e => e.stopPropagation()}
                                        >

                                            <EmojiPicker

                                                onEmojiClick={(emoji) => setPost(prev => `${prev} ${emoji.emoji}`)}
                                            />
                                        </div>
                                    </div>
                                }

                            </div>
                        </section>

                        <section >

                        </section>
                    </div>
                </main>
            }
        </>
    )
}

export default BaseModalForComments