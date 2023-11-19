'use client'
import React, { useState } from 'react'
import { CiSettings } from 'react-icons/ci'

type Props = {}

function TopHeader({ }: Props) {
    const [active , setactive] = useState("1")
    return (
        <section id="topSectionFeeds" className=" w-full flex flex-row items-center justify-around sticky bg-white top-0">
            <div className=' w-full flex flex-row items-center justify-center px-2'>

                <section id="forYou" className=' hover:bg-neutral-200 border-[1px] w-1/2 text-center p-2 rounded-sm'>
                    For You
                </section>
                <section id="Following" className=' hover:bg-neutral-200 w-1/2 text-center p-2 rounded-sm'>
                    Following
                </section>
            </div>
            <section id="CenterTopsetting" className=' hover:bg-neutral-200 mx-2 p-2 rounded-full'>
                <CiSettings size={22} className=' font-bold' />
            </section>
        </section>
    )
}

export default TopHeader