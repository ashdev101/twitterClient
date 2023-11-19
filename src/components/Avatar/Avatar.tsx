import React from 'react'

type Props = {
    name: string
}

function Avatar({ name }: Props) {
    return (
        <div className=' w-[40px] h-[40] rounded-full p-2 border-[1px] border-neutral-300 text-center '>
            {name}
        </div>
    )
}

export default Avatar