'use client'
import { RiQuillPenLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { OpenPostModal } from '../../../Features/PostModalSlice'
type Props = {}

function PostMake({ }: Props) {
    const dispatch = useDispatch()
    return (
        <button className=' max-w-max max-h-max p-2  bg-[rgb(29,155,240)] text-white rounded-full ' onClick={()=>dispatch(OpenPostModal())}>

            <div className=''>
                
                <RiQuillPenLine size={25} />

            </div>
        </button>
    )
}

export default PostMake