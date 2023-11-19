'use client'

import React from 'react'

type Props = {
    type: "outlined" | "black"
    Icon?: React.ReactNode
    text: string
    wfull?: boolean
}

function Button({ type , Icon , text ,wfull}: Props) {
    return (
        <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 border w-full'>
            {
                Icon &&
                Icon
            }
            <div>Sign in with Apple</div>
        </button>
    )
}

export default Button