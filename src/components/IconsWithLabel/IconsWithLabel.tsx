'use client'

import React from 'react'

type Props = {

    label?: string
    Icon: React.ReactNode
    onClick : ()=>void
}

function IconsWithLabel({ label, Icon , onClick }: Props) {
    return (
        <div className=' flex flex-row items-center justify-center cursor-pointer' onClick={onClick}>
            <div className=' p-2 hover:bg-blue-200 rounded-full text-center'>
                {Icon}
            </div>
            {label && <span className=' text-sm'>{label}</span>}
        </div>
    )
}

export default IconsWithLabel