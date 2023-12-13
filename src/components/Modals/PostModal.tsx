'use client'

import { BiWorld } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { HiOutlineGif } from 'react-icons/hi2'
import { LuSettings2 } from 'react-icons/lu'
import { BiSmile } from 'react-icons/bi'
import { TbCalendarTime } from 'react-icons/tb'
import { CiLocationOn } from 'react-icons/ci'
import Avatar from '../Avatar/Avatar'
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { makeTweet } from '../../../ReactQueryQueries/getCurrentUser'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Features/Store/Store'
import { ClosePostModal } from '../../../Features/PostModalSlice'
import { MdClose } from "react-icons/md";
import { OpenGifModal } from '../../../Features/GifModalSlice'
import Image from 'next/image'
import { ClearGif } from '../../../Features/GifSelectSlice'
import { RingLoader } from 'react-spinners'
import LoadingPlaceholder from '/loadingPlaceholder.webp'
import EmojiPicker from 'emoji-picker-react';
import { CloseEmojiSelector, OpenEmojiSelector } from '../../../Features/EmojiSlectorSlice'
import axios from 'axios'
import toast from 'react-hot-toast'

export type Post = {

    content: string,
    image?: string
}

export type SelectedFiles = {
    file: Blob | undefined
    selectedFileURL: string
}

type Props = {}

function PostModal({ }: Props) {
    const isOpen = useSelector((state: RootState) => state.PostModal.isOpen)
    const isEmojiOpen = useSelector((state: RootState) => state.SelectEmoji.isEmojiOpen)

    const SelectedGif: string = useSelector((state: RootState) => state.SelectGif.selectedGif)
    // console.log(SelectedGif)

    const fileInputRef = useRef<HTMLInputElement>(null)
    const formData = new FormData()
    // if(SelectedGif.length > 2){
    //     const fetchSelectedGif = useQuery({
    //         queryKey : ["selected-gif"] ,
    //         queryFn : async()=> axios(SelectedGif)
    //     })
    // }
    const dispatch = useDispatch()


    const [selectedFiles, setSelectedFiles] = useState<SelectedFiles>({
        file: undefined,
        selectedFileURL: ""
    })

    const [post, SetPosts] = useState<Post>({
        content: "",
        image: undefined
    })

    // console.log(post.content)

    const { mutate, isPending } = makeTweet()


    const mutationForUplaodingMedia = useMutation({
        mutationFn: async () => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_CLOUDNARY_ENDPOINT}`, formData)
            return res.data
        },
        onSuccess: (data) => {
            console.log(data.url)
            SetPosts({ ...post, image: data.url })


        },
        onError: (err) => {
            toast.error("Opps Somehting went wrong ")
        }
    })


    const handleMakeTweet = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        if (!selectedFiles.file && !SelectedGif) return

        selectedFiles.file ? formData.append("file", selectedFiles.file) : formData.append("file", SelectedGif)

        formData.append("upload_preset", "ml_default");
        mutationForUplaodingMedia.mutate()
    }

    const handleFileClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            // console.log(e.target.files[0])
            setSelectedFiles(
                {
                    file: e.target.files[0],
                    selectedFileURL: URL.createObjectURL(e.target.files[0])
                }
            )
            // setSelectedFiles({ ...selectedFiles, selectedFileURL: URL.createObjectURL(e.target.files[0])})
        }
    }


    const isPostButtonDisabled = mutationForUplaodingMedia.isPending || isPending || post.content.length < 2
    useEffect(() => {
        //just to be extra cautious that there should be no unexpexted behaviour
        if (!isPostButtonDisabled) {
            mutate(post)
        }
        setSelectedFiles({ file: undefined, selectedFileURL: "" })
        SetPosts({
            content: "",
            image: undefined
        })
        dispatch(ClearGif())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post.image])
    return (
        <>
            {
                isOpen &&
                <main className=' bg-neutral-500/70 w-screen h-screen md:pt-10' onClick={() => { dispatch(ClosePostModal()); dispatch(CloseEmojiSelector()) }}>
                    <div className=' relative m-auto  flex flex-col items-start justify-start gap-1  bg-white w-full h-full md:max-h-max md:max-w-[600px]  border  md:rounded-2xl' onClick={e => { e.stopPropagation(); dispatch(CloseEmojiSelector()) }}>
                        <section id='top' className=' flex flex-row items-center justify-between gap-2 w-full px-3'>

                            <div className=' md:hidden self-start  mb-2' onClick={() => dispatch(ClosePostModal())}>
                                <IoIosArrowRoundBack size={30} />
                            </div>

                            <div className='hidden md:block hover:bg-neutral-200 p-2 rounded-full self-start  mb-2' onClick={() => dispatch(ClosePostModal())}>
                                <MdClose size={30} />
                            </div>

                            <div className=' flex flex-row items-center justify-center gap-3'>
                                <button className='rounded-lg  px-3 py-2 font-bold text-[rgb(142,205,247)] hover:bg-[rgba(142,205,247,0.21)]'>
                                    Draft
                                </button>
                                <button className=' md:hidden py-1 px-3 bg-[rgb(142,205,247)] text-white rounded-full ' onClick={handleMakeTweet} >Post</button>
                            </div>
                        </section>
                        <section id='setPost' className=' flex flex-row items-start gap-2 justify-between h-full w-full  mt-2 px-3 '>

                            <div id='AvatarPosts'>
                                <Avatar

                                />
                            </div>
                            <div className=' flex flex-col items-start justify-center gap-1 self-start  w-full text-[rgb(142,205,247)]'>
                                <input type="text" value={post.content} placeholder='What is happening?!' className=' w-full h-[75px] p-3 text-black outline-none' onChange={e => SetPosts({ ...post, content: e.target.value })} />
                                {SelectedGif.length > 2
                                    ?
                                    <div className=' w-full max-h-[400px] overflow-y-scroll relative'>
                                        <div className=' absolute top-1 right-1 hover:bg-neutral-200 p-2 rounded-full self-start  mb-2' onClick={() => dispatch(ClearGif())}>
                                            <MdClose size={30} />
                                        </div>
                                        <Image

                                            src={SelectedGif}
                                            alt='gif'
                                            width={400}
                                            height={400}
                                            className=' w-full h-full max-h-[400px] object-cover '
                                        />

                                        {/* <RingLoader
                                            color="#36d7b7"
                                            speedMultiplier={1}
                                            loading={imageLoading}
                                            className='m-auto' /> */}
                                    </div>
                                    : null
                                }

                                {selectedFiles.file &&
                                    <div className=' w-full max-h-[400px] overflow-y-scroll relative'>
                                        <div className={`${selectedFiles.file.type.includes("image") ? "absolute top-1 right-1 " : " w-max h-max self-start"} hover:bg-neutral-200 p-2 rounded-full self-start  mb-2`} onClick={() => setSelectedFiles({ file: undefined, selectedFileURL: "" })}>
                                            <MdClose size={30} />
                                        </div>
                                        {
                                            selectedFiles.file?.type.includes("image")
                                                ?
                                                (
                                                    <Image
                                                        src={selectedFiles.selectedFileURL}
                                                        alt='image'
                                                        width={400}
                                                        height={400}
                                                        className=' w-full h-full max-h-[400px] object-cover '
                                                    />
                                                )

                                                : <video
                                                    controls
                                                    src={selectedFiles.selectedFileURL}
                                                    autoPlay
                                                    className=' w-full h-full max-h-[400px] '
                                                />
                                        }

                                    </div>
                                }

                                <div className=' flex flex-row items-center justify-center gap-2'>
                                    <BiWorld size={15} />
                                    <span className=' text-sm font-bold'>Everyone can reply</span>
                                </div>
                                <div className=' flex flex-row items-center justify-between w-full'>
                                    <section id='uploadMenu' className=' flex flex-row item-center justify-between gap-4'>

                                        <input type="file" ref={fileInputRef} accept="image/*, video/*" className=' hidden' onChange={handleFileChange} />
                                        <button onClick={handleFileClick} disabled={SelectedGif.length > 2} >

                                            <CiImageOn size={18} />
                                        </button>
                                        <div onClick={() => dispatch(OpenGifModal())}>
                                            <HiOutlineGif size={18} />
                                        </div>
                                        <div>
                                            <LuSettings2 size={18} />
                                        </div>

                                        <div onClick={(e) => { e.stopPropagation(); dispatch(OpenEmojiSelector()) }}>
                                            <BiSmile size={18} />
                                        </div>

                                        <div>
                                            <TbCalendarTime size={18} />
                                        </div>
                                        <div>
                                            <CiLocationOn size={18} />
                                        </div>
                                    </section>



                                    {mutationForUplaodingMedia.isPending
                                        ?
                                        (<button
                                            className={`py-1 px-3 ${isPostButtonDisabled ? "bg-[rgb(142,205,247)]" : "bg-[rgb(29,155,240)]"} text-white rounded-full`}
                                            onClick={handleMakeTweet}
                                            disabled={mutationForUplaodingMedia.isPending || isPending}>
                                            Uploading
                                        </button>)

                                        : (<button
                                            className={`py-1 px-3 ${isPostButtonDisabled ? "bg-[rgb(142,205,247)]" : "bg-[rgb(29,155,240)]"} text-white rounded-full`}
                                            onClick={handleMakeTweet}
                                            disabled={isPostButtonDisabled}>
                                            Post
                                        </button>)
                                    }

                                </div>
                            </div>
                            <div className=' '>

                            </div>
                        </section>
                        {isEmojiOpen &&
                            <div
                                className="absolute flex items-end justify-center w-full h-full" onClick={() => dispatch(CloseEmojiSelector())} >
                                {/* className={` absolute ${SelectedGif ? "top-[-30rem] left-[-105px]" :"top-[2rem] left-[-150px] sm:top-0 sm:left-auto sm:right-auto" }  ' onClick={ e=>e.stopPropagation()}`}> */}
                                <div
                                    onClick={e => e.stopPropagation()}
                                >

                                    <EmojiPicker

                                        onEmojiClick={(emoji) => SetPosts({ ...post, content: `${post["content"]}${emoji.emoji}` })}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </main>}
        </>
    )
}

export default PostModal