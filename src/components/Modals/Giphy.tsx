'use client'
import { useState, useRef, useEffect, SyntheticEvent } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { BsSearch } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'
import {
    Grid,
} from '@giphy/react-components'
import {IGif} from '@giphy/js-types'
import { useMutation } from '@tanstack/react-query'
import { RingLoader } from 'react-spinners'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { CloseGifModal } from '../../../Features/GifModalSlice'
import { RootState } from '../../../Features/Store/Store'
import { useResizeDetector } from 'react-resize-detector';
import { SelecteGif } from '../../../Features/GifSelectSlice'



type Props = {}


function Giphy({ }: Props) {
    const isOpen = useSelector((state: RootState) => state.GifModal.isOpen)

    const dispatch = useDispatch()
    const { width, height, ref } = useResizeDetector();
    const [isLoading, setIsLoading] = useState(false)
    // console.log(width)

    const [search, setSearch] = useState("")
    const gf = new GiphyFetch(`${process.env.NEXT_PUBLIC_GIPHY_API}`)


    //getting lazy to have custom isloading...
    const mutationforSearch = useMutation({
        mutationFn: (offset: number) => gf.search(search, { offset, limit: 10 })
    })

    const mutationforInitialFetch = useMutation({
        mutationFn: (offset: number) => gf.trending({ offset, limit: 10 })
    })

    const GifSelectHandler = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>)=>{
        dispatch(SelecteGif(gif.images.original.url))
        dispatch(CloseGifModal())

    }


    return (
        <>
            {
                isOpen &&
                <main className=' w-screen h-screen bg-slate-400/40 md:p-6 ' onClick={() => dispatch(CloseGifModal())}>
                    <div ref={ref} className=' bg-white w-full h-full h- md:max-w-[600px] md:h-[600px] overflow-x-hidden  m-auto flex flex-col items-center justify-center  relative' onClick={e => e.stopPropagation()}>
                        <div className=' md:hidden self-start mt-[6.75rem] mb-[-3.5rem]' onClick={() => dispatch(CloseGifModal())}>
                            <IoIosArrowRoundBack size={30} />
                        </div>

                        <div className='mt-[8.75rem] mb-[-3.5rem] hidden md:block hover:bg-neutral-200 p-2 rounded-full self-start ' onClick={() => dispatch(CloseGifModal())}>
                            <MdClose size={30} />
                        </div>

                        
                        <section className=' w-full  max-h-max mt-14 sticky top-0  z-[700]'>
                            <div id='searchBar' className=' bg-white  top-0 mt-2 w-full max-h-max flex flex-row items-center justify-between gap-2 rounded-full border-[1px] border-blue-200 '>
                                <div className=' ml-3 mr-2 '>
                                    <BsSearch size={20} />
                                </div>
                                <input value={search} type="text" className=' w-full outline-none px-3 py-2' onChange={e => setSearch(e.target.value)} />
                                <div className='ml-2 mr-3 '>
                                    <RxCrossCircled className='' />
                                </div>
                            </div>
                        </section>

                        <section className=' w-full min-h-screen md:h-full  p-4 '>
                            {search
                                // sience fetchGifs takes only promise we have to use mutateAsync version of mutation 
                                ? width &&  <Grid width={width > 600 ? 590 : width} columns={3} gutter={6} fetchGifs={mutationforSearch.mutateAsync} key={search} onGifClick={GifSelectHandler} noLink hideAttribution />

                                : width && <Grid width={width > 600 ? 590 : width} columns={3} fetchGifs={mutationforInitialFetch.mutateAsync} onGifClick={GifSelectHandler} noLink hideAttribution />
                            }
                            {/* <RingLoader
                        color="#36d7b7"
                        speedMultiplier={1}
                        loading={mutationforSearch.isPending || mutationforInitialFetch.isPending }
                        className=' m-auto'
                        /> */}



                        </section>

                    </div>

                </main>
            }
        </>
    )
}

export default Giphy
