'use client'
import React from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { GrSearch } from 'react-icons/gr'
import { GoBell } from 'react-icons/go'
import { FaRegEnvelope } from 'react-icons/fa'


type Props = {}
type ileftHnadlerIcons = {
    label: string
    Icon: React.ReactNode
}

const leftHnadlerIcons: Array<ileftHnadlerIcons> = [
    {
        label: "Home",
        Icon: <GrHomeRounded size={25} />
    },
    {
        label: "Explorer",
        Icon: <GrSearch size={25} />
    },
    {
        label: "Notifications",
        Icon: <GoBell size={25} />
    },
    {
        label: "Messages",
        Icon: <FaRegEnvelope size={25} />
    }

]

function BottomHandler({}: Props) {
  return (
    <div 
            // className=' fixed top-0  mx-3 min-w-[70px] xl:m-auto flex flex-col items-start self-center justify-evenly gap-2 h-full max-w-max'>
            className='  mx-3 w-full min-h-[70px]  flex flex-row items-center self-center justify-between gap-2 border-top bg-white'>
                {/* <div className=' rounded-full hover:bg-neutral-200 p-3  transition mt-3'>
                    <RiTwitterXLine size={30} />
                </div> */}
                {
                    leftHnadlerIcons.map((item, index) => (
                        <div key={index} className=' flex flex-row items-center justify-between gap-3 max-h-max  w-max py-2 px-3 rounded-full hover:bg-neutral-200  transition' >
                            <div className='py-1 xl:p-0'>
                                {item.Icon}
                            </div>
                            <span className=' hidden xl:block text-lg font-bold'>{item.label}</span>
                        </div>

                    ))
                }

            </div>

  )
}

export default BottomHandler