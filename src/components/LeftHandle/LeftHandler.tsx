'use client'
import { useState } from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { GrSearch } from 'react-icons/gr'
import { GoBell } from 'react-icons/go'
import { FaRegEnvelope } from 'react-icons/fa'
import { RiFileListLine } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi'
import { RiTwitterXLine } from 'react-icons/ri'
import { CgMoreO } from 'react-icons/cg'
import { IconType } from 'react-icons'
import { CgMoreAlt } from 'react-icons/cg'
import { RiQuillPenLine } from 'react-icons/ri'
import { graphqlClient } from '../../../clients/graphqlClient'
import { getCurrentUserQuery } from '../../../graphql/query/user'
import { getUser } from '../../../ReactQueryQueries/getCurrentUser'
import { useSelector, useDispatch } from 'react-redux'
import { OpenPostModal } from '../../../Features/PostModalSlice'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { clearCurrentUser } from '../../../Features/CurrentUserSlice'

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
    },
    {
        label: "Lists",
        Icon: <RiFileListLine size={25} />
    },
    {
        label: "Communities",
        Icon: <HiOutlineUsers size={25} />
    },
    {
        label: "Premium",
        Icon: <RiTwitterXLine size={25} />
    },
    {
        label: "Profile",
        Icon: <HiOutlineUser size={25} />
    },
    {
        label: "More",
        Icon: <CgMoreO size={25} />
    }
]

function LeftHandler({ }: Props) {
    const queryClient = useQueryClient()
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = getUser()
    // console.log(user)
    const [userOptionIsOpen, setUserOptionIsOpen] = useState(false)


    return (


        <div
            // className=' fixed top-0  mx-3 min-w-[70px] xl:m-auto flex flex-col items-start self-center justify-evenly gap-2 h-full max-w-max'>
            className='  mx-3 min-w-[70px] lg:m-auto flex flex-col items-start self-center justify-evenly gap-2 h-full max-w-max'>
            <div className=' rounded-full hover:bg-neutral-200 p-3  transition mt-3'>
                <RiTwitterXLine size={30} />
            </div>
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

            <button className=' max-w-max max-h-max p-2 xl:py-3 xl:px-24 bg-[rgb(29,155,240)] text-white rounded-full ' onClick={() => dispatch(OpenPostModal())}>

                <span className=' hidden xl:block text-bold ' >Post</span>
                <div className='xl:hidden' >
                    <RiQuillPenLine size={25} />
                </div>

            </button>

            <div className=' relative gap-2 mb-3 max-w-max max-h-max py-1 xl:px-3  transition  rounded-full flex flex-row  items-center justify-between hover:bg-neutral-200' onClick={() => setUserOptionIsOpen(!userOptionIsOpen)}>
                <span className='w-[45px] h-[45px] rounded-full flex items-center justify-center p-3 border-[1px]'>A</span>

                <div className=' hidden xl:block felx flex-col items-center justify-center   ' >
                    <section className=' text-lg font-bold'>Ashish Kumar</section>
                    <section >@Email.com</section>
                </div>
                <section className=' hidden xl:block p-2 rounded-full'>
                    <CgMoreAlt size={20} />

                </section>

                {
                    userOptionIsOpen &&
                    <div className=' bg-white absolute bottom-[55px] lg:bottom-[60px] min-w-max max-w-fit p-3 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 '>
                        <section className=' text-md font-bold  min-w-max cursor-pointer' onClick={() => { window.localStorage.removeItem("__token_test"); queryClient.clear(); dispatch(clearCurrentUser()) }}>
                            Log Out @ash
                        </section>
                    </div>
                }
            </div>



        </div>


        // </main >

    )
}

export default LeftHandler