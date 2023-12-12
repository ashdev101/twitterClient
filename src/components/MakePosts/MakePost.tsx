'use client'

import { BiWorld } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { HiOutlineGif } from 'react-icons/hi2'
import { LuSettings2 } from 'react-icons/lu'
import { BiSmile } from 'react-icons/bi'
import { TbCalendarTime } from 'react-icons/tb'
import { CiLocationOn } from 'react-icons/ci'
import Avatar from '../Avatar/Avatar'
import { ChangeEvent, MouseEvent, MouseEventHandler, useRef, useState, useEffect } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { makeTweet } from '../../../ReactQueryQueries/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import { OpenGifModal } from '../../../Features/GifModalSlice'
import { RootState } from '../../../Features/Store/Store'
import axios from 'axios'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { ClearGif } from '../../../Features/GifSelectSlice'
import EmojiPicker from 'emoji-picker-react'
import { CloseEmojiSelector, OpenEmojiSelector } from '../../../Features/EmojiSlectorSlice'
import { SelectedFiles } from '../Modals/PostModal'
import toast from 'react-hot-toast'


export type Post = {

    content: string,
    image?: string
}


type Props = {}

function MakePost({ }: Props) {
    const isEmojiOpen = useSelector((state: RootState) => state.SelectEmoji.isEmojiOpen)


    const SelectedGif: string = useSelector((state: RootState) => state.SelectGif.selectedGif)
    console.log(SelectedGif)

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

    console.log(post.content)

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
        console.log("here")
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

    }, [post.image])

    const isPostButtonDisabled = mutationForUplaodingMedia.isPending || isPending || post.content.length < 2


    return (
        <section id='setPost' className=' flex flex-row items-start gap-2 justify-between w-full  mt-3 p-3'>
            <div id='AvatarPosts'>
                <Avatar
                    // profileImageUrl={"/"}
                />
            </div>
            <div className=' flex flex-col items-start justify-center gap-1 self-start w-full text-[rgb(142,205,247)]'>
                <input value={post.content} type="text" placeholder='What is happening?!' className=' w-full p-3 text-black outline-none' onChange={e => SetPosts({ ...post, content: e.target.value })} />
                {SelectedGif.length > 2
                    ?
                    <div className=' relative w-full max-h-[450px] '>
                        <div className=' absolute top-1 right-1 hover:bg-neutral-200 p-2 rounded-full self-start  mb-2' onClick={() => dispatch(ClearGif())}>
                            <MdClose size={30} />
                        </div>
                        <Image

                            src={SelectedGif}
                            alt='gif'
                            width={400}
                            height={400}
                            className=' w-full h-[450px] object-fill m-auto'
                        />
                    </div>
                    : null
                }

                {selectedFiles.file &&
                    <div className=' relative w-full max-h-[450px] '>
                        <div className={`${selectedFiles.file.type.includes("image") ? "absolute top-1 right-1 " : " w-max h-max self-start"} hover:bg-neutral-200 p-2 rounded-full self-start  mb-2`} onClick={() => setSelectedFiles({ file: undefined, selectedFileURL: "" })}>
                            <MdClose size={30} />
                        </div>
                        {
                            selectedFiles.file?.type.includes("image")
                                ?
                                (
                                    <Image
                                        src={selectedFiles.selectedFileURL}
                                        alt='gif'
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
                        <div className=' relative ' >
                            <div onClick={() => { isEmojiOpen ? dispatch(CloseEmojiSelector()) : dispatch(OpenEmojiSelector()) }}>
                                <BiSmile size={18} />
                            </div>
                            {
                                isEmojiOpen &&
                                <div

                                    className={`absolute ${SelectedGif ? "top-[-30rem] left-[-105px]" : "top-[2rem] left-[-150px] sm:top-[23px] sm:left-auto sm:right-auto"}`}
                                    onClick={e => e.stopPropagation()}>
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

                </div >
            </div >
            <div className=' '>

            </div>

        </section >
    )
}

export default MakePost