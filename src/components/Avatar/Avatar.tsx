import Image from 'next/image'
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import AvatarP from '/public/avatar.jpg'
type Props = {
    profileImageUrl?: string | null | undefined
}

function Avatar({ profileImageUrl }: Props) {
    return (
        <div 
        className=' min-w-[40px] min-h-[40px] rounded-full  text-center '>
        {/* className=' min-w-[40px] min-h-[40px] rounded-full p-2 border-[1px] border-neutral-300 text-center '> */}


            {
                profileImageUrl 
                    ?

                    (<Image
                        src={profileImageUrl}
                        alt={"A"}
                        width={35}
                        height={35}
                        className=' object-cover rounded-full'
                    />)
                    : <Image
                        src={AvatarP}
                        alt={"A"}
                        width={35}
                        height={35}
                        className=' object-cover rounded-full'
                    />
            }
        </div>
    )
}

export default Avatar