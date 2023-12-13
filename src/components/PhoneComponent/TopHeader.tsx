'use client'

import React, { useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { RiTwitterXLine } from 'react-icons/ri'
import SideMenuBarPhone from './SideMenuBarPhone'

type Props = {}

function TopHeaderPhone({ }: Props) {
    // const isVisible = useSelector((state:RootState)=>state.TopHeader.isOpen)
    
    const [sideSliderisOpen, SetSideSliderIsOpen] = useState(false)
    // console.log(sideSliderisOpen)
    return (
        <>
            <main className=' flex flex-col items-center justify-center gap-2 w-full h-max bg-white border-b '>
                <div className=' flex flex-row items-center justify-between w-full h-max px-2 '>

                    <div
                        className='w-[45px] h-[45px] rounded-full flex items-center justify-center p-3 border-[1px] cursor-pointer'
                        onClick={() => { SetSideSliderIsOpen(!sideSliderisOpen) }} >
                        A
                    </div>
                    {sideSliderisOpen &&
                        (<section className=' w-full h-full absolute top-0  z-[600] transition '>
                            <SideMenuBarPhone
                                isOpen={false}
                                onclose={() => { SetSideSliderIsOpen(false) }}
                            />

                        </section>)
                    }
                    <div className=' rounded-full hover:bg-neutral-200 p-3  transition mt-3'>
                        <RiTwitterXLine size={30} />
                    </div>


                    <section id="CenterTopsetting" className=' hover:bg-neutral-200 mx-2 p-2 rounded-full'>
                        <CiSettings size={22} className=' font-bold' />
                    </section>
                </div>


                <div className=' w-full flex flex-row items-center justify-center px-2'>

                    <section id="forYou" className=' hover:bg-neutral-200 border-r  w-1/2 text-center p-2 rounded-sm'>
                        For You
                    </section>
                    <section id="Following" className=' hover:bg-neutral-200 w-1/2 text-center p-2 rounded-sm'>
                        Following
                    </section>
                </div>

                {/* </section> */}
            </main>

        </>
    )
}

export default TopHeaderPhone