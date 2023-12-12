"use client"
import Image from 'next/image'
import S1 from '/public/1.jpg'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { MdGraphicEq } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import IconsWithLabel from '@/components/IconsWithLabel/IconsWithLabel'
import Avatar from '../Avatar/Avatar';
import { SlOptions } from 'react-icons/sl';
import { useState, useRef, useEffect } from 'react';
import PostsOptions from '../PostsOptions/PostsOptions';
import { useIsVisible } from '../../../lib/intersectionObserver';
import BaseModalForComments from '../Modals/BaseModalForComments';
import { useDispatch } from 'react-redux';
import { OpenCommentModal } from '../../../Features/CommentModalSlice';



type Props = {
    profileImageUrl: string | null | undefined
    name: string
    createdAt: string
    content: string | null | undefined
    image: string | null | undefined
    isImage: boolean | undefined ,
    tweetId : string | null | undefined

}


function PostCard({ profileImageUrl, name, createdAt, content, image, isImage , tweetId }: Props) {
    // console.log(tweetId)
    const dispatch = useDispatch()
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);
    const [isCommentModalOpen , setisCommentModalOpen] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []); // No dependencies to avoid unnecessary re-runs

    useEffect(() => {
        if (isIntersecting && ref.current) {
            ref.current.play();
        }
        else{
            ref.current?.pause()
        }
    }, [isIntersecting]);




    const [open, setOpen] = useState(false)
    return (
        <>
            <section className=' w-full min-h-max flex flex-row items-start justify-center gap-1 sm:p-3 p-1 max-w-[514px]'>
                <Avatar
                    profileImageUrl={profileImageUrl}
                />
                <div id='cardHeader' className='flex flex-col gap-4 w-full items-start justify-center' >
                    <section id='profileDetails' className=' flex flex-row items-center justify-between gap-2  w-full relative'>
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
                        <div className=' p-2 rounded-full hover:bg-blue-100' onClick={() => setOpen(!open)}>
                            <SlOptions />
                        </div>

                        <PostsOptions
                            isOpen={open}
                            name={`@${name}`}
                        />
                    </section>

                    {content &&
                        (
                            <section id='postDescription'>
                                <div id='shortDetails' className=' text-sm sm:text-md '>
                                    {content}
                                </div>
                                {content.length > 50 &&
                                    (<div id='showMore' className=' text-sm sm:text-md text-blue-400 hover:underline'>
                                        Show More
                                    </div>)
                                }
                            </section>
                        )
                    }

                    {image && isImage &&
                        (
                            <section id='CardMainBody' className='max-w-[512px]  w-full'>
                                <Image
                                    src={image}
                                    alt='image'
                                    width={512}
                                    height={512}
                                    className=' w-full h-full rounded-2xl max-h-[450px] max-w-[512px] '
                                />
                            </section>
                        )
                    }
                    {image && !isImage &&
                        (
                            <section id='CardMainBody' className='max-w-[512px]  w-full relative'>
                                <video
                                    ref={ref}
                                    controls
                                    disablePictureInPicture
                                    controlsList='nodownload noremoteplayback noplaybackrate '
                                    src={image}
                                    width={512}
                                    height={512}
                                    className=' w-full h-full rounded-2xl max-h-[450px] max-w-[512px] '
                                />
                            </section>
                        )
                    }

                    <section id='Cardfooter' className=' flex flex-row items-center justify-between w-full'>
                        <div className=' flex flex-row items-center gap-2 sm:gap-3 justify-center'>

                            <IconsWithLabel
                                Icon=<FaRegComment size={18} />
                                label="121"
                                onClick={()=>{dispatch(OpenCommentModal())}}
                            />
                            {
                                isCommentModalOpen &&
                                <BaseModalForComments
                                // not this profileImageUrl is for author of the post 
                                     profileImageUrl = {profileImageUrl} 
                                     name = {name} 
                                     createdAt = {createdAt}
                                     tweetId={tweetId}
                                     postDescription={content}
                                />
                            }
                            <IconsWithLabel
                                Icon=<BiRepost size={18} />
                                label="121"
                                onClick={()=>{}}
                            />
                            <IconsWithLabel
                                Icon=<CiHeart size={18} />
                                label="121"
                                onClick={()=>{}}
                            />
                            <IconsWithLabel
                                Icon=<MdGraphicEq size={18} />
                                label="121"
                                onClick={()=>{}}
                            />

                        </div>

                        <div className='hidden md:flex flex-row items-center justify-center gap-2 '>
                            <IconsWithLabel
                                Icon=<CiBookmark size={18} />
                                label="121"
                                onClick={()=>{}}
                            />
                            <IconsWithLabel
                                Icon=<FiShare size={18} />
                                label="121"
                                onClick={()=>{}}
                            />

                        </div>
                    </section>

                </div >

            </section>
        </>
    )
}

export default PostCard