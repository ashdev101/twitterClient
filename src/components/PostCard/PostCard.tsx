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
import { TfiFaceSad } from "react-icons/tfi";
import { SlUserFollow } from "react-icons/sl";
import { GoChecklist } from "react-icons/go";
import { TiVolumeMute } from "react-icons/ti";
import { MdBlock } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { RiFlag2Line } from "react-icons/ri";
import { useState } from 'react';



type Props = {}


function PostCard({ }: Props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <section className=' w-full min-h-max flex flex-row items-start justify-center gap-1 p-3 max-w-[514px]'>
                <Avatar
                    name='A'
                />
                <div id='cardHeader' className='flex flex-col gap-4 w-full items-start justify-center' >
                    <section id='profileDetails' className=' flex flex-row items-center justify-between gap-2  w-full relative'>
                        <div className=' flex flex-row items-center justify-center gap-2'>
                            <div id=' name' className='font-bold text-md '>
                                aSHISH
                            </div>
                            <div id='Profile handler' className=' text-md text-neutral-300 '>
                                @ashish
                            </div>
                            <div id='timestamp' >
                                7h
                            </div>
                        </div>
                        <div className=' p-2 rounded-full hover:bg-blue-100' onClick={() => setOpen(!open)}>
                            <SlOptions />
                        </div>

                        {open &&

                            (<div id='PostOptions' className=' min-w-max min-h-max flex flex-col items-start justify-center gap-2 p-3 absolute top-7 right-0 bg-white shadow-md rounded-lg z-20'>
                                <IconsWithLabel
                                    Icon=<TfiFaceSad size={18} />
                                    label="Not interested in this post"
                                />
                                <IconsWithLabel
                                    Icon=<SlUserFollow size={18} />
                                    label="Follow @ashish"
                                />
                                <IconsWithLabel
                                    Icon=<GoChecklist size={18} />
                                    label="Add/remove @ashish from Lists"
                                />
                                <IconsWithLabel
                                    Icon=<TiVolumeMute size={18} />
                                    label="NMute @ashsih"
                                />
                                <IconsWithLabel
                                    Icon=<MdBlock size={18} />
                                    label="Not interested in this post"
                                />
                                <IconsWithLabel
                                    Icon=<MdGraphicEq size={18} />
                                    label="View post engagements"
                                />
                                <IconsWithLabel
                                    Icon=<ImEmbed2 size={18} />
                                    label="Embed post"
                                />
                                <IconsWithLabel
                                    Icon=<RiFlag2Line size={18} />
                                    label="Report post"
                                />

                            </div>)
                        }
                    </section>

                    <section id='postDescription'>
                        <div id='shortDetails' className=' text-md '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio voluptatum repudiandae repellat. Dolore, veniam similique nesciunt architecto officiis fugit! Illo numquam corporis eaque esse temporibus maiores soluta nobis asperiores dicta id.
                        </div>
                        <div id='showMore' className=' text-md text-blue-400 hover:underline'>
                            Show More
                        </div>
                    </section>

                    <section id='CardMainBody' className=' max-w-[512px] max-h-max '>
                        <Image
                            src={S1}
                            alt='image'
                            className=' w-full h-full rounded-2xl '
                        />
                    </section>

                    <section id='Cardfooter' className=' flex flex-row items-center justify-between w-full'>
                        <div className=' flex flex-row items-center gap-3 justify-center'>

                            <IconsWithLabel
                                Icon=<FaRegComment size={18} />
                                label="121"
                            />
                            <IconsWithLabel
                                Icon=<BiRepost size={18} />
                                label="121"
                            />
                            <IconsWithLabel
                                Icon=<CiHeart size={18} />
                                label="121"
                            />
                            <IconsWithLabel
                                Icon=<MdGraphicEq size={18} />
                                label="121"
                            />

                        </div>

                        <div className=' flex flex-row items-center justify-center gap-2 '>
                            <IconsWithLabel
                                Icon=<CiBookmark size={18} />
                                label="121"
                            />
                            <IconsWithLabel
                                Icon=<FiShare size={18} />
                                label="121"
                            />

                        </div>
                    </section>

                </div >

            </section>
        </>
    )
}

export default PostCard