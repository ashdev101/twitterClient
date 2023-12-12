import React, { useState } from 'react'
import IconsWithLabel from '../IconsWithLabel/IconsWithLabel'
import { TfiFaceSad } from "react-icons/tfi";
import { SlUserFollow } from "react-icons/sl";
import { GoChecklist } from "react-icons/go";
import { TiVolumeMute } from "react-icons/ti";
import { MdBlock, MdGraphicEq } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { RiFlag2Line } from "react-icons/ri";

type Props = {
    isOpen: boolean
    name: string
}

function PostsOptions({ isOpen, name }: Props) {



    return (
        <>
            {
                isOpen &&

                <div id='PostOptions' className=' min-w-max min-h-max flex flex-col items-start justify-center gap-2 p-3 absolute top-7 right-0 bg-white shadow-md rounded-lg z-20'>
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<TfiFaceSad size={18} />
                        label="Not interested in this post"
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<SlUserFollow size={18} />
                        label={`Follow ${name}`}
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<GoChecklist size={18} />
                        label={`Add/remove ${name} from Lists`}
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<TiVolumeMute size={18} />
                        label={`NMute ${name}`}
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<MdBlock size={18} />
                        label="Not interested in this post"
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<MdGraphicEq size={18} />
                        label="View post engagements"
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<ImEmbed2 size={18} />
                        label="Embed post"
                    />
                    <IconsWithLabel
                    onClick = {()=>{}}
                        Icon=<RiFlag2Line size={18} />
                        label="Report post"
                    />

                </div>

            }
        </>
    )

}

export default PostsOptions