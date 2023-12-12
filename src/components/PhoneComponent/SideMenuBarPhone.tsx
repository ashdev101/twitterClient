'use client'
import { CiBookmark } from "react-icons/ci";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi2";
import { PiMoneyBold } from "react-icons/pi";
import { RiFileListLine, RiTwitterXLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import IconsWithLabel from "../IconsWithLabel/IconsWithLabel";
import DropDown from "./DropDown";
import { SiSimpleanalytics } from "react-icons/si";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MouseEvent, useState } from "react";

type Props = {
    isOpen: boolean
    onclose: () => void
}

type ileftHnadlerIcons = {
    label: string
    Icon: React.ReactNode
}

const SideHnadlerIcons: Array<ileftHnadlerIcons> = [

    {
        label: "Profile",
        Icon: <HiOutlineUser size={25} />
    },
    {
        label: "Premium",
        Icon: <RiTwitterXLine size={25} />
    },

    {
        label: "Lists",
        Icon: <RiFileListLine size={25} />
    },

    {
        label: "Bookmarks",
        Icon: <CiBookmark size={25} />
    },
    {
        label: "Communities",
        Icon: <HiOutlineUsers size={25} />
    },


    {
        label: "Monetization",
        Icon: < PiMoneyBold size={25} />
    }
]

function SideMenuBarPhone({ isOpen, onclose }: Props) {

    const handleClick = (e :  MouseEvent<HTMLDivElement, globalThis.MouseEvent> )=>{
        e.stopPropagation()
    }

    return (

        <main className=' w-screen h-screen bg-tranparent ' onClick={onclose}>
            <div className='overflow-y-scroll  min-w-[250px] w-[80vw] h-full  flex flex-col items-center justify-start pt-5  px-3 bg-white' onClick={handleClick}>

                <section id="top" className='w-full flex flex-row items-start justify-between'>
                    <div className=' flex flex-col  items-start justify-center gap-1'>
                        <span className='w-[45px] h-[45px] rounded-full flex items-center justify-center p-3 border-[1px]'>A</span>

                        <section className=' text-lg font-bold'>Ashish Kumar</section>
                        <section >@Email.com</section>

                        <section id="follwers" className=" flex flex-row items-center justify-center gap-2">
                            <div>
                                2 following
                            </div>
                            <div>
                                0 followers
                            </div>
                        </section>
                    </div>

                    <section className=''>
                        <CiCirclePlus size={30} className=' text-neutral-400 cursor-pointer' />
                    </section>
                </section>

                <section id="center" className=' flex flex-col items-start justify-center gap-3 w-full mt-2 mb-2'>

                    {
                        SideHnadlerIcons.map((item, index) => (
                            <IconsWithLabel key={index} onClick={()=>{}}
                                label={item.label}
                                Icon={item.Icon}
                            />
                        ))
                    }
                </section>

                <section id="bottom" className=' w-full flex flex-col items-start justify-center gap-2'>
                    <DropDown
                        heading="Creator Studio"
                        dropDownOptions=<IconsWithLabel onClick={()=>{}} label="Analytics" Icon=<SiSimpleanalytics size={20} /> />
                    />
                    <DropDown
                        heading="Professional Tools"
                        dropDownOptions=<IconsWithLabel onClick={()=>{}} label="Ads" Icon=<LuArrowUpRightSquare size={20} /> />
                    />
                    <DropDown
                        heading="Setting and Support"
                        dropDownOptions={

                            <section className=" flex flex-col items-start justify-center gap-1 ">
                                <IconsWithLabel onClick={()=>{}} label="Setting and privacy" Icon=<CiSettings size={20} /> />
                                <IconsWithLabel onClick={()=>{}} label="Help center" Icon=<IoIosHelpCircleOutline size={20} /> />
                                <IconsWithLabel onClick={()=>{}} label="Data saver" Icon=<FiPieChart size={20} /> />
                                <IconsWithLabel onClick={()=>{}} label="Display" Icon=<FaPaintBrush size={20} /> />
                                <IconsWithLabel onClick={()=>{}} label="Log out" Icon=<MdLogout size={20} /> />
                            </section>
                        }
                    />
                </section>
            </div>
        </main>


    )
}

export default SideMenuBarPhone