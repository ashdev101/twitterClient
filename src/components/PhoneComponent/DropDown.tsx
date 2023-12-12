'use client'
import { MouseEvent, MouseEventHandler, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


type Props = {
    heading: string
    dropDownOptions: React.ReactNode

}

function DropDown({ heading, dropDownOptions }: Props) {
    const [isOpen, SetIsOpen] = useState(false)

    const handleClick = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
        // e.stopPropagation()
        SetIsOpen(!isOpen)
    }

    return (
        <main className=' flex flex-col items-start justify-center gap-2 w-full py-1 px-2' onClick={handleClick}>
            <section className=" w-full max-h-max flex flex-row items-center justify-between">
                <div className=" font-bold text-md">
                    {heading}
                </div>

                {
                    isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />
                }
            </section>

            {
                isOpen
                    ? (
                        <>
                            {dropDownOptions}
                        </>
                    )

                    : null
            }

        </main>

    )
}

export default DropDown