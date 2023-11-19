'use client'
import React, { useState } from 'react'
import { SlOptions } from 'react-icons/sl'
import { BiSad } from 'react-icons/bi'

type Props = {
    title: string
    MainHeading: string

}

function WhatsHappeningOption({ title, MainHeading }: Props) {

    const [open, SetOpen] = useState(false)
    return (
        <>

            <div id='happeningCard' className=' flex flex-row items-center justify-between w-full relative z-auto'>
                <div id='top'>
                    <div className='text-sm '>{title}</div>
                    <div className=' text-md font-bold'>{MainHeading}</div>
                </div>
                <div id='right' className=' p-2 hover:bg-neutral-200 transition rounded-full' onClick={() => SetOpen(!open)}>
                    <SlOptions size={18} />
                </div>
                {
                    open &&
                    (
                        <div className=' absolute  width-[80%] top-1 flex flex-col items-start rounded-md justify-evenly gap-2 p-2 shadow-lg bg-white z-20'>
                            <section className='flex flex-row items-center gap-3 cursor-pointer' >
                                <div className=' '>
                                    <BiSad size={15} />

                                </div>
                                <span >Not interseted in this </span>

                            </section>
                            <section className='flex flex-row items-center gap-3 cursor-pointer' >
                                <div className=' '>
                                    <BiSad size={15} />

                                </div>
                                <span >This trend is harmful or spammy </span>

                            </section>

                        </div>
                    )
                }


            </div>
        </>
    )
}

export default WhatsHappeningOption