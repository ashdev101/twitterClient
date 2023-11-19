'use client'
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

type Props = {

    onClose : ()=>void
    heading : string
    body : React.ReactNode
    

}

function BaseModal({ onClose , heading, body}: Props) {
    return (
        <main className=' w-screen h-screen flex flex-col items-center justify-start bg-neutral-400'>
            <div className=' flex flex-col items-center justify-between gap-3 w-full h-[90vh] md:max-w-[600px] md:mt-[30px] bg-neutral-100 shadow-lg rounded-lg border '>
                <section id='Topheading'
                    className=' w-full p-3 flex flex-row items-center justify-between'>
                    <div onClick={() => { }} className='p-2 hover:bg-neutral-200 rounded-full'>
                        <RxCross1 size={20} />
                    </div>

                    <div className=' w-full  '>
                        <RiTwitterXLine size={30} className = ' mx-auto' />
                    </div>

                </section>
                <div className=' flex flex-col items-center justify-between w-full px-10 md:px-18 lg:px-24 xl:px-28 h-full'>


                    <section
                        id='Body'
                        className=' w-full min-w-max flex flex-col items-center justify-start gap-6 h-full   ' >

                        <div className=' text-3xl font-bold  w-full text-start'>
                           {heading}
                        </div>
                        {
                            body
                        }
                    </section>
                </div>
            </div>
        </main>
    )
}

export default BaseModal