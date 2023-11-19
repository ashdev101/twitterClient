import React from 'react'

type Props = {

    label: string
    Icon: React.ReactNode
}

function IconsWithLabel({ label, Icon }: Props) {
    return (
        <div className=' flex flex-row items-center justify-center cursor-pointer'>
            <div className=' p-2 hover:bg-blue-200 rounded-full text-center'>
                {Icon}
            </div>
            <span className=' text-sm'>{label}</span>
        </div>
    )
}

export default IconsWithLabel